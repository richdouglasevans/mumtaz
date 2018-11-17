import { expect } from 'chai';
import { lettersAreExhausted } from '../../../../../src/mumtaz/games/letterforms';

describe('lettersAreExhausted', function () {

    it('given empty letters is exhausted.', function () {
        expect(lettersAreExhausted({})).to.be.true;
    });

    it('given letters with one letter remaining is not exhausted.', function () {
        expect(lettersAreExhausted({ a: {} })).to.be.false;
    });
});
