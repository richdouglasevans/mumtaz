import { expect } from 'chai';
import { randomIn } from '../../../../../src/mumtaz/games/support/randomIn';

describe('randomIn', function () {
    describe('clamps the index to a minimum of 0:', function () {
        it('-1 -> 0', function () {
            expect(randomIn(-1)).to.eq(0);
        });
        it('0 -> 0', function () {
            expect(randomIn(0)).to.eq(0);
        });
    });
});
