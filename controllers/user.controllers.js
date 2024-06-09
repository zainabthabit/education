const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const getFirebaseImgUrl = require("../storeService");
const generateToken = (userCredentials) => {
    const payload = {
        id: userCredentials._id,
        username: userCredentials.username,
        email: userCredentials.email,
        fullName: userCredentials.fullName,
        role: userCredentials.role
    };
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: Date.now() + 60,
    });
    return token;
};

const login = async (req, res, next) => {
    try {
        const payload = req.user;
        const generatedToken = generateToken(payload);
        const { username, password } = req.body;
        const foundUser = await User.findOne({ username: username });
        if (!foundUser) {
            return res.status(400).send("cannot find user");
        }
        const correctPassword = await bcrypt.compare(password, foundUser.password);
        if (!correctPassword) {
            return res.status(400).send("correctPassword");
        }

        res.status(201).json({ generatedToken });
    } catch (error) {
        next(error);
    }
};

const signUp = async (req, res, next) => {
    try {
        console.log(req.body);
        if (!req.body.email || !req.body.password) {
            return res.status(400).send("email and password are required");
        }

        let user = {
            email: req.body.email,
            username: req.body.username
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        user.password = hashedPassword;
        if (req.file) {
            try {
                const imgUrl = await getFirebaseImgUrl(
                    "user-img",
                    req.file.path,
                    req.file.originalname
                );
                user.img = imgUrl;
                console.log(user.img);
            } catch (fileError) {
                return res
                    .status(500)
                    .send({ message: "Image upload failed", error: fileError.message });
            }
        }
        const newUser = await User.create(user);
        const generatedToken = generateToken(newUser);
        res.status(201).json({ generatedToken });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    signUp,
    login,
};
