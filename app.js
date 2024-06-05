const dotevn = require("dotenv");
dotevn.config();
const connectDB = require("./database.js");
const express = require("express");
const app = express();
connectDB();

const port = 8001;
const cors = require("cors");
app.use(express.json());
app.use(cors());

const blogRoutes = require("./routes/blog.routes.js");
const commentRoutes = require("./routes/comment.routes.js");
const levelRoutes = require("./routes/level.routes.js");
const subjectRoutes = require("./routes/subject.routes.js");
const userRoutes = require("./routes/user.routes.js");
const videoRoutes = require("./routes/video.routes.js");
app.use("/blog", blogRoutes);
app.use("/comment", commentRoutes);
app.use("/level", levelRoutes);
app.use("/subject", subjectRoutes);
app.use("/user", userRoutes);
app.use("video", videoRoutes);
app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
