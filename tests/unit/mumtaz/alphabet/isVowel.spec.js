import { expect } from 'chai';
import { isVowel, LetterTypes } from '../../../../src/mumtaz/alphabet';

describe('isVowel', function () {
    it('given a vowel returns true.', function () {
        const letter = {
            letterType: LetterTypes.Vowel
        };
        expect(isVowel(letter)).to.be.true;
    });

    it('given a consonant returns false.', function () {
        const letter = {
            letterType: LetterTypes.Consonant
        };
        expect(isVowel(letter)).to.be.false;
    });
});
