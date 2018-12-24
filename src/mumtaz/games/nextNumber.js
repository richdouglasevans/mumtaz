import shuffle from 'lodash.shuffle';
import { others } from './support/others';
import { numbers as allNumbers } from '../numbers';
import { randomValue } from './support/randomValue';
import { randomValues } from './support/randomValues';
import { isEmptyObject } from './support/isEmptyObject';

export {
    resetStreak,
    incrementStreak
} from './support/streak';

const allNumbersSansLast = () => {
    const ns = allNumbers();
    const last = ns[ns.length - 1]
    return others(ns, last);
};

export const initialState = () => ({
    numbers: allNumbersSansLast(),
    round: {
        number: null,
        transliterations: []
    },
    chosenNumber: null,
    streak: 0,
    longestStreak: 0,
    hasChosenAtLeastOnce: false
});

export const refresh = (state) => Object.assign({}, state, {
    numbers: allNumbersSansLast()
});

export const newRound = (state) => {
    const [number, remainingNumbers] = randomValue(state.numbers);
    const otherNumbers = randomValues(
        (number) => number,
        others(allNumbersSansLast(), number)
    );
    return Object.assign({}, state, {
        round: {
            number,
            transliterations: shuffle([
                number,
                ...otherNumbers
            ])
        },
        numbers: remainingNumbers,
        chosenNumber: null
    });
};

export const numbersAreExhausted = isEmptyObject;

export const itIsTheNextNumber = (numberForThisRound, number) =>
    (numberForThisRound + 1) === number;
