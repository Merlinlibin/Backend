
const { json } = require('body-parser');
const express = require('express');
const App = express();

const HOSTNAME = 'localhost';
const PORT = '3000';

let notes = [
  {
    id: 1,
    content: "backend using node.js",
    important: true,
  },
  {
    id: 2,
    content: "node.js is a open source",
    important: false,
  },
  {
    id: 3,
    content: "simple web server using node.js",
    important: true,
  },
  {
    id: 4,
    content: "express makes backend restful painless",
    important: true,
  },
  {
    id: 5,
    content: "backend restful using nodejs will grow complex",
    important: false,
  },
];
App.get('/', (req, res) => {
    res.send('hello world');
})

App.get("/api/notes", (req, res) => {
  res.json(notes);
});

App.listen(PORT, () => {
    console.log(`server running at http://${HOSTNAME}:${PORT}`);
})