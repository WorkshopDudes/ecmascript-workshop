import getLyrics from '../../src/04-template-strings/02-multiline-strings';

describe('04-template-strings - multiline strings', () => {

    it('multiline string works', () => {
        expect(getLyrics()).to.equal(`Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you`);
    });

});
