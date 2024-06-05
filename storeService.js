const { bucket } = require("./firebase-admin");
const { getDownloadURL } = require("firebase-admin/storage");

const getFirebaseImgUrl = async (destinationName, filePath, fileName) => {
  console.log("des", destinationName);
  console.log("file", filePath);
  console.log("name", fileName);
  const remoteFilePath = ` ${destinationName}/${fileName}`;

  const [uploadedFile] = await bucket.upload(filePath, {
    destination: remoteFilePath,
  });

  const imageURL = await getDownloadURL(uploadedFile);
  console.log("imageURL", imageURL);
  return imageURL;
};

module.exports = getFirebaseImgUrl;
