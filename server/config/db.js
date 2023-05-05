const mongoose = require("mongoose");
const MongoURI = "mongodb://127.0.0.1/boilerprate"
ConnectToMongo = () => {
  mongoose.connect(MongoURI );
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    console.log("Connected to MongoDB");
  });
};

module.exports = ConnectToMongo;
