/*
    TASK
    ----
    Change the ```log``` method to use embedded expressions instead of
    concatenated strings.
*/

function log(level, time, text) {
    return '[' + level.toUpperCase() + '] [' + time + '] ' + text;
}

module.exports = log;
