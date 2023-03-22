const express = require("express");
const cors = require("cors");
const users = require("./users.json");
const events = require("./events.json");
const bodyParser = require('body-parser')
const fs = require('fs');

const app = express();
app.use(bodyParser.json())

  const corsOptions = {
    AccessControlAllowOrigin: '*',
    origin: 'https://ltimindtree-frontend.vercel.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
  }
  app.use(cors(corsOptions))

app.use((req, res, next) => {
    // res.setHeader()
    res.setHeader('Content-Type', 'application/json')
    next()
  })
app.get("/users", (req, res) => {
    res.json(users);
});
app.post("/createusers", (req, res) => {
    console.log("req", req.body)
    fs.writeFile('users.json', JSON.stringify(req.body), (err) => {
        // if (err) throw err;
        console.log('Data written to file');
    });
    res.send('Data retrieved and written to file');
    // res.json(users);
});

app.get("/events", (req, res) => {
    res.json(events);
});
app.post("/createevents", (req, res) => {
    console.log("req", req.body)
    fs.writeFile('events.json', JSON.stringify(req.body), (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
    res.send('Data retrieved and written to file');
    // res.json(events);
});


app.post("/updateevent", (req, res) => {
    console.log("req", req.body)
    fs.writeFile('events.json', JSON.stringify(req.body), (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
    res.send('Data retrieved and written to file');
    // res.json(events);
});

app.post("/deleteevent", (req, res) => {
    console.log("req", req.body)
    fs.writeFile('events.json', JSON.stringify(req.body), (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
     res.json(events);
    res.send('Data retrieved and written to file');
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});