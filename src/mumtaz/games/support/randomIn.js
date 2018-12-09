const { floor, random, max } = Math;

export const randomIn = (range) =>
    floor(random() * max(0, range));
