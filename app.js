const express = require("express");
const PiCamera = require("pi-camera");
const Execute = require("./execute");

let outputLocation = `${__dirname}`;

const port = 3010;
const app = express();
app.use(express.json());
app.listen(port, () => {
  console.log(`PI Camera REST Server running on port ${port}`);
});

/*
Capture a jpg of a given width and height to a named filename
We default to a file named capture.jpg with a resolution of 1280 X 1024
*/

app.post("/captureJPG", (req, res, next) => {
  const { fileName = "capture.jpg", width = 1280, height = 1024 } = req.body;

  console.log(req.body);
  const cameraInstance = new PiCamera({
    mode: "photo",
    output: `${outputLocation}/${fileName}`,
    width: `${width}`,
    height: `${height}`,
    nopreview: true,
  });

  cameraInstance
    .snap()
    .then((result) => {
      res.json([
        "Status",
        `Image Captured ${fileName}: Resolution; ${width} X ${height} saved to ${outputLocation}`,
      ]);
      console.log("Captured image " + fileName);
    })
    .catch((error) => {
      console.log(error);
      res.json([
        "Status",
        `Image Capture for ${fileName} Failed: Requested Resolution was: ${width} X ${height}`,
        error,
      ]);
    });
});

/* Get the requested file and send it to the client.
We default to capture.jpg if a filename is not specified

*/
app.post("/image", (req, res, next) => {
  const { fileName = "capture.jpg" } = req.body;
  console.log(req.body);
  res.sendFile(`${outputLocation}/${fileName}`);
});
