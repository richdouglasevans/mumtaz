import { expect } from 'chai';
import { itIsTheNextNumber } from '../../../../../src/mumtaz/games/nextNumber';

describe('itIsTheNextNumber', function () {

    it('is true when it\'s the next ascending number.', () => {
        expect(itIsTheNextNumber(1, 2)).to.be.true;
    });

    [-1, 0, 2, 3, 4, 5, null, NaN, undefined].forEach(v => {
        it(`is false when it\'s not the next ascending number: [${v}]`, () => {
            expect(itIsTheNextNumber(v, 2)).to.be.false;
        });
    });
});
