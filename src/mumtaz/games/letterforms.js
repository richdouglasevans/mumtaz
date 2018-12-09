import shuffle from 'lodash.shuffle';
import { others } from './support/others';
import { letters as allLetters } from '../alphabet';
import { randomValue } from './support/randomValue';
import { randomValues } from './support/randomValues';
import { isEmptyObject } from './support/isEmptyObject';

export {
    resetStreak,
    incrementStreak
} from './support/streak';

export const initialState = () => ({
    letters: allLetters(),
    round: {
        letter: null,
        transliterations: []
    },
    streak: 0,
    longestStreak: 0,
    hasChosenAtLeastOnce: false
});

export const refresh = (state) => Object.assign({}, state, {
    letters: allLetters()
});

export const newRound = (state) => {
    const [letter, remainingLetters] = randomValue(state.letters);
    const otherLetters = randomValues(
        (letter) => letter,
        others(allLetters(), letter)
    );
    return Object.assign({}, state, {
        round: {
            letter,
            transliterations: shuffle([
                letter,
                ...otherLetters
            ])
        },
        letters: remainingLetters
    });
};

export const lettersAreExhausted = isEmptyObject;

export const chosenLetterMatches = (letterForThisRound, chosenLetter) =>
    letterForThisRound.name === chosenLetter.name;
