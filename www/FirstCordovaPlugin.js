var exec = require("cordova/exec");
var PLUGIN_NAME = 'FirstCordovaPlugin';

var FirstCordovaPlugin = {
  echo: function(phrase, cb) {
    exec(cb, null, PLUGIN_NAME, 'echo', [phrase]);
	return true;
  },
  getDate: function(cb) {
    exec(cb, null, PLUGIN_NAME, 'getDate', []);
	return true;
  }
};

module.exports = FirstCordovaPlugin;
