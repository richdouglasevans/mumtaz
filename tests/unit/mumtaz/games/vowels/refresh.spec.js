import { expect } from 'chai';
import freeze from 'deep-freeze-node';
import { refresh } from '../../../../../src/mumtaz/games/vowels';
import {
    vowels as allVowels,
    consonants as allConsonants
} from '../../../../../src/mumtaz/alphabet';

describe('refresh', function () {
    it('yields fresh vowels and consonants.', function () {
        const originalState = freeze({
            vowels: [
                { name: 'a' }
            ],
            consonants: [
                { name: 'b' },
                { name: 'c' }
            ]
        });

        const newState = refresh(originalState);

        expect(Object.keys(newState.vowels).length).to.equal(allVowels().length,
            'The vowels must have been refreshed back to all the vowels in the alphabet.');
        expect(Object.keys(newState.consonants).length).to.equal(allConsonants().length,
            'The consonants must have been refreshed back to all the consonants in the alphabet.');
    });
});
