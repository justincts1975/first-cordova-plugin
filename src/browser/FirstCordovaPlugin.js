function FirstCordovaPlugin_echo (phrase, win, fail) {
    console.log('FROM JAVASCRIPT: ' + phrase);
    setTimeout(function () {
        if (win) {
            win();
        }
    }, 0);
}
function FirstCordovaPlugin_getDate (win, fail) {
    console.log('FROM JAVASCRIPT: ' + phrase);
    setTimeout(function () {
        if (win) {
            win(getdate());
        }
    }, 0);
}


module.exports = {
    echo: FirstCordovaPlugin_echo,
    getDate: FirstCordovaPlugin_getDate
};

require('cordova/exec/proxy').add('FirstCordovaPlugin', module.exports);
