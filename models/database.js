let mongoose = require('mongoose');

const mongodb_url = "mongodb://root:root@cluster0-shard-00-00.t5vwx.mongodb.net:27017"+
",cluster0-shard-00-01.t5vwx.mongodb.net:27017,cluster0-shard-00-02.t5vwx.mongodb.net:27017/DoAnMang?replicaSet=atlas-ywn71w-shard-0&ssl=true&authSource=admin";
//const mongodb_url = "mongodb://localhost:27017/DoAnMang"

class Database {
    constructor() {
        this._connect()
    }

    _connect() {
        mongoose.connect(mongodb_url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
            .then(() => {
                console.log("Database connection successfully!");
            })
            .catch(err => {
                console.log("Database connection error!");
            })
    }
}

module.exports = new Database();