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

export const initialState = () => ({
    numbers: allNumbers(),
    round: {
        number: null,
        transliterations: []
    },
    streak: 0,
    longestStreak: 0,
    hasChosenAtLeastOnce: false
});

export const refresh = (state) => Object.assign({}, state, {
    numbers: allNumbers()
});

export const newRound = (state) => {
    const [number, remainingNumbers] = randomValue(state.numbers);
    const otherNumbers = randomValues(
        (number) => number,
        others(allNumbers(), number)
    );
    return Object.assign({}, state, {
        round: {
            number,
            transliterations: shuffle([
                number,
                ...otherNumbers
            ])
        },
        numbers: remainingNumbers
    });
};

export const numbersAreExhausted = isEmptyObject;

export const chosenNumberMatches = (numberForThisRound, chosenNumber) =>
    numberForThisRound.value === chosenNumber.value;
