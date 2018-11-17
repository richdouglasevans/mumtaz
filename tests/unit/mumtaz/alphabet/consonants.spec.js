import { expect } from 'chai';
import { consonants, isConsonant } from '../../../../src/mumtaz/alphabet';

describe('consonants', function () {

    it('returns only consonants.', function () {
        expect(consonants()).not.to.be.empty;
        consonants().forEach(letter => {
            expect(isConsonant(letter)).to.be.true;
        });
    });
});
