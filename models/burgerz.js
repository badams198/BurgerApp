var orm = require("../config/orm.js"); 

var burger = {
    read: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },
    create: function(userInput, cb) {
        orm.insertOne(userInput, function(res) {
            cb(res);
        });
    },
    update: function(burgerId, cb) {
        orm.updateOne(burgerId, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;