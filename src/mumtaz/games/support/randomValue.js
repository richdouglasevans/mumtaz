import { compact } from './compact';
import { removeAt } from './removeAt';
import { randomIn } from './randomIn';

export function randomValue(values) {
    const index = randomIn(Object.keys(values).length);
    const value = values[index];
    const others = compact(removeAt(index, values));
    return [value, others];
};
