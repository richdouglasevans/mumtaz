import shuffle from 'lodash.shuffle';
import { letters as allLetters } from '../alphabet';

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

export const incrementStreak = (state) => {
    const streak = state.streak + 1;
    const longestStreak = (state.longestStreak < streak)
        ? streak
        : state.longestStreak;
    return Object.assign({}, state, {
        streak,
        longestStreak
    });
};

export const resetStreak = (state) => Object.assign({}, state, {
    streak: 0
});

export const freshLetters = (state) => Object.assign({}, state, {
    letters: Object.assign({}, allLetters())
});

export const newRound = (state) => {
    const [letter, remainingLetters] = pullLetter(state.letters);
    return Object.assign({}, state, {
        round: {
            letter,
            transliterations: shuffle([
                letter,
                ...pullLetters(remainingLetters)
            ])
        },
        letters: remainingLetters
    });
};

export const pullLetter = (letters) => {
    const index = indexOfRandomLetter(Object.keys(letters).length);
    const letter = letters[index];
    const remainingLetters = Object.values(letters);
    delete remainingLetters[index];
    return [letter, remainingLetters];
};

export const pullLetters = (letters, amount = 2) => {
    let remainingLetters = Object.values(letters);
    return Array.from(Array(amount).keys())
        .map(() => {
            const [letter, otherLetters] = pullLetter(remainingLetters);
            remainingLetters = otherLetters;
            return letter;
        });
};

export const lettersAreExhausted = (letters) => Object.keys(letters).length === 0;

export const chosenLetterMatches = (letterForThisRound, chosenLetter) =>
    letterForThisRound.name === chosenLetter.name

const indexOfRandomLetter = (range) => Math.floor((Math.random() * range));
