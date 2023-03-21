const express = require("express");
const cors = require("cors");
const users = require("./users.json");
const events = require("./events.json");
const bodyParser = require('body-parser')
const fs = require('fs');

const app = express();
app.use(bodyParser.json())
app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json')
    res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader(
        "Access-Control-Allow-Methods",
        "OPTIONS, GET, POST, PUT, PATCH, DELETE"
      );
    next()
  })
app.get("/users", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader(
        "Access-Control-Allow-Methods",
        "OPTIONS, GET, POST, PUT, PATCH, DELETE"
      );
    res.json(users);
});
app.post("/createusers", (req, res) => {
    console.log("req", req.body)
    res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader(
        "Access-Control-Allow-Methods",
        "OPTIONS, GET, POST, PUT, PATCH, DELETE"
      );
    fs.writeFile('users.json', JSON.stringify(req.body), (err) => {
        // if (err) throw err;
        console.log('Data written to file');
    });
    res.send('Data retrieved and written to file');
    // res.json(users);
});

app.get("/events", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader(
        "Access-Control-Allow-Methods",
        "OPTIONS, GET, POST, PUT, PATCH, DELETE"
      );
    res.json(events);
});
app.post("/createevents", (req, res) => {
    console.log("req", req.body)
    res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader(
        "Access-Control-Allow-Methods",
        "OPTIONS, GET, POST, PUT, PATCH, DELETE"
      );
    fs.writeFile('events.json', JSON.stringify(req.body), (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
    res.send('Data retrieved and written to file');
    // res.json(events);
});


app.post("/updateevent", (req, res) => {
    console.log("req", req.body)
    res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader(
        "Access-Control-Allow-Methods",
        "OPTIONS, GET, POST, PUT, PATCH, DELETE"
      );
    fs.writeFile('events.json', JSON.stringify(req.body), (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
    res.send('Data retrieved and written to file');
    // res.json(events);
});

app.post("/deleteevent", (req, res) => {
    console.log("req", req.body)
    res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader(
        "Access-Control-Allow-Methods",
        "OPTIONS, GET, POST, PUT, PATCH, DELETE"
      );
    fs.writeFile('events.json', JSON.stringify(req.body), (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
     res.json(events);
    res.send('Data retrieved and written too file');
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});