import { expect } from 'chai';
import { isEmptyObject } from '../../../../../src/mumtaz/games/support/isEmptyObject';

describe('isEmptyObject', function () {
    it('given empty object returns true.', function () {
        expect(isEmptyObject({})).to.be.true;
    });

    it('given non-empty object returns false.', function () {
        expect(isEmptyObject({ a: {} })).to.be.false;
    });
});
