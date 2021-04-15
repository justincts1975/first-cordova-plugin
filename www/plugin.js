
//var exec = require('cordova/exec');

var PLUGIN_NAME = 'FirstCordovaPlugin';

var FirstCordovaPlugin = {
  echo: function(phrase, cb) {
    cordova.exec(cb, null, PLUGIN_NAME, 'echo', [phrase]);
	
  },
  getDate: function(cb) {
    cordova.exec(cb, null, PLUGIN_NAME, 'getDate', []);
  }
};

module.exports = FirstCordovaPlugin;
