var express = require('express');
var app = express();
var db = require('./db_config.js');
var db_connector = new db();
const BodyParser = require("body-parser");
const CONNECTION_URL = "mongodb+srv://admin:admin@cluster0-jiett.mongodb.net/dieteticadb?retryWrites=true";
const MongoClient = require("mongodb").MongoClient;

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.set("PORT", process.env.PORT || 5000);

app.get("/api", (req, res) => {
  db_connector.getCollection(req.query.collectionEndpoint, (dbResponse) => {
    res.send(dbResponse);
  });
})
app.get("/api/seeds", (req, res) => {
  db_connector.getCollection('seeds', (dbResponse) => {
    res.send(dbResponse);
  });
})

app.get("/seeds", (req, res) => {
  db_connector.getCollection(req.query.collectionEndpoint, (dbResponse) => {
    res.send(dbResponse);
  });
})

app.get("/api/categories/:id", (req, res) => {
  res.send('Categories , give me your id please..')
})

app.listen(app.get("PORT"), () => {
  console.log(`API runnning at: localhost:${app.get("PORT")}`);
  MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
      throw error;
    }

  });
})