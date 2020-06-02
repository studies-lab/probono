const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.lawers = require("./lawer.model.js")(mongoose);
db.clients = require("./client.model.js")(mongoose);
/* db.rules = require("./rule.models.js")(mongoose);
db.processes = require("./process.models.js")(mongoose);
db.movements = require("./movement.models.js")(mongoose); */

module.exports = db;