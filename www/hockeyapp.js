var exec = require('cordova/exec');

var hockeyapp = {
    start:function(success, failure, token) {
        exec(success, failure, "HockeyApp", "start", [ token ]);
    },
    feedback:function(success, failure) {
        exec(success, failure, "HockeyApp", "feedback", []);
    },
    trackstart:function(success, failure) {
        exec(success, failure, "HockeyApp", "trackstart", []);
    },
    trackpause:function(success, failure) {
        exec(success, failure, "HockeyApp", "trackpause", []);
    }
};

module.exports = hockeyapp;
