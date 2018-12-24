import { expect } from 'chai';
import freeze from 'deep-freeze-node';
import { refresh } from '../../../../../src/mumtaz/games/nextNumber';
import { numbers as allNumbers } from '../../../../../src/mumtaz/numbers';

describe('refresh', function () {

    it('yields fresh numbers.', function () {
        const originalState = freeze({
            numbers: [0, 1, 2]
        });

        const newState = refresh(originalState);

        expect(newState.numbers.length)
            .to.equal(allNumbers().length - 1,
                'The numbers must have been refreshed back to all numbers sans the last one.');
    });
});
