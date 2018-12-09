export function removeAt(index, o) {
    const xs = Object.values(o);
    delete xs[index];
    return xs;
}
