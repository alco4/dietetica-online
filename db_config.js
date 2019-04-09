const mongoose = require('mongoose');

class db_connection {
  constructor() {
    this.config();
  }

  async config() {
    const CONNECTION_URL = "mongodb+srv://admin:admin@cluster0-jiett.mongodb.net/dieteticadb?retryWrites=true";
    mongoose.connect(CONNECTION_URL);
    this.connection = await mongoose.connection;
    this.connection.on('error', (err) => console.log(err));
    mongoose.connection.on("open", function () {
      console.log("mongodb is connected!!");
    });
  }

  async getCollection(collectionEndpoint, callback) {
    this.connection = await mongoose.connection;
    this.connection.db.collection(collectionEndpoint, function (err, collection) {
      collection.find({}).toArray(function (err, data) {
        callback(data)
      })
    })
  }
}

module.exports = db_connection;
