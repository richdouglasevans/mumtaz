import { expect } from 'chai';
import { vowels, isVowel } from '../../../../src/mumtaz/alphabet';

describe('vowels', function () {

    it('returns only vowels.', function () {
        expect(vowels()).not.to.be.empty;
        vowels().forEach(letter => {
            expect(isVowel(letter)).to.be.true;
        });
    });
});
