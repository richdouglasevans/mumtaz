import { expect } from 'chai';
import { chosenLetterMatches } from '../../../../../src/mumtaz/games/letterforms';

describe('chosenLetterMatches', function () {

    it('returns true when the chosen letter matches.', function () {
        const chosenLetter = { name: 'a' };
        const targetLetter = { name: 'a' };

        const matches = chosenLetterMatches(targetLetter, chosenLetter);

        expect(matches).to.be.true;
    });

    it('returns false when the chosen letter doesn\'t match.', function () {
        const chosenLetter = { name: 'a' };
        const targetLetter = { name: 'b' };

        const matches = chosenLetterMatches(targetLetter, chosenLetter);

        expect(matches).to.be.false;
    });
});
