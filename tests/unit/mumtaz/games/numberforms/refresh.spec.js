import { expect } from 'chai';
import freeze from 'deep-freeze-node';
import { refresh } from '../../../../../src/mumtaz/games/numberforms';
import { numbers as allNumbers } from '../../../../../src/mumtaz/numbers';

describe('refresh', function () {
    it('yields fresh numbers.', function () {
        const originalState = freeze({
            numbers: []
        });

        const newState = refresh(originalState);

        expect(Object.keys(newState.numbers).length).to.equal(allNumbers().length,
            'The numbers must have been refreshed back to all the numbers.');
    });
});
