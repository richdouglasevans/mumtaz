import { expect } from 'chai';
import { conjunctionMatches } from '../../../../../src/mumtaz/games/vowels';

describe('conjunctionMatches', function () {

    const conjunctionOf = (vowel, consonant) => ({
        vowel: { name: vowel },
        consonant: { name: consonant }
    });

    it('returns true when the conjunctions match.', function () {
        const chosenConjunction = conjunctionOf('a', 'b');
        const targetConjunction = conjunctionOf('a', 'b');

        const matches = conjunctionMatches(targetConjunction, chosenConjunction);

        expect(matches).to.be.true;
    });

    it('returns false when the conjunctions don\'t match by vowel.', function () {
        const chosenConjunction = conjunctionOf('a', 'b');
        const targetConjunction = conjunctionOf('i', 'b');

        const matches = conjunctionMatches(targetConjunction, chosenConjunction);

        expect(matches).to.be.false;
    });

    it('returns false when the conjunctions don\'t match by consonant.', function () {
        const chosenConjunction = conjunctionOf('a', 'b');
        const targetConjunction = conjunctionOf('a', 'c');

        const matches = conjunctionMatches(targetConjunction, chosenConjunction);

        expect(matches).to.be.false;
    });
});
