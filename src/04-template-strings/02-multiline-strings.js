/*
    TASK
    ----

    In the printLyrics() function, remove all string concatenations and '\n'
    characters, and use a multiline string with embedded expressions instead.
*/



var prefix = 'Never gonna';

function printLyrics() {
    return prefix + ' give you up\n' +
           prefix + ' let you down\n' +
           prefix + ' run around and desert you\n' +
           prefix + ' make you cry\n' +
           prefix + ' say goodbye\n' +
           prefix + ' tell a lie and hurt you';
}

module.exports = printLyrics;
