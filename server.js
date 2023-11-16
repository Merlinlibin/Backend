const { json } = require("body-parser");
const express = require("express");
const App = express();
const fs = require("fs");

const HOSTNAME = "localhost";
const PORT = "3000";

App.get("/", (req, res) => {
  res.send("hello world");
});

App.get("/create/.txt", (req, res) => {
  const content = new Date();
  const filename =
    "Date_" +
    content.getDate() +
    "-" +
    (content.getMonth() + 1) +
    "-" +
    content.getFullYear() +
    ",Time_" +
    content.getHours() +
    "-" +
    content.getMinutes() +
    "-" +
    content.getSeconds();
  fs.writeFile(`./Files/${filename.toString()}.txt`, content.toString(), (err) => {
    if (err) console.log(err);
    console.log("file created successfully...");
  });
  res.send(`File name with ${filename.toString()} created Successfully...`);
});

App.get("/files", (req, res) => {
  const dir = "./Files/";

    fs.readdir(dir, (err, files) => {
        let data = [];
    files.forEach((file) => {
      if (file.split(".")[1] == "txt") {
          
          data = data.concat(file);
      }
    });
        res.send(data.join("\n").toString());
        console.log(data.join("\n").toString());
  });
});

App.listen(PORT, () => {
  console.log(`server running at http://${HOSTNAME}:${PORT}`);
});
