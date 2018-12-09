import { randomValue } from './randomValue';

export function randomValues(transform, values, amount = 2) {
    let rest = Object.values(values);
    return Array.from(Array(amount).keys())
        .map(() => {
            const [value, others] = randomValue(rest);
            rest = others;
            return transform(value);
        });
};
