import { expect } from 'chai';
import { isConsonant, LetterTypes } from '../../../../src/mumtaz/alphabet';

describe('isConsonant', function () {
    it('given a consonant returns true.', function () {
        const letter = {
            letterType: LetterTypes.Consonant
        };
        expect(isConsonant(letter)).to.be.true;
    });

    it('given a vowel returns false.', function () {
        const letter = {
            letterType: LetterTypes.Vowel
        };
        expect(isConsonant(letter)).to.be.false;
    });
});
