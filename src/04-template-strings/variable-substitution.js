function log(level, time, text) {
    return '[' + level.toUpperCase() + '] [' + time + '] ' + text;
}

module.exports = log;
