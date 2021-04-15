var PLUGIN_NAME = 'FirstCordovaPlugin';

var FirstCordovaPlugin = {
  echo: function(phrase, cb) {
    console.log('FROM JAVASCRIPT: ' + phrase);
    setTimeout(function () {
        if (success) {
            success();
        }
    }, 0);
	return true;
  },
  getDate: function(cb, success, fail) {
    setTimeout(function () {
        if (success) {
            success(Date().toString());
        }
    }, 0);
	return true;
  }
};

module.exports = FirstCordovaPlugin;
