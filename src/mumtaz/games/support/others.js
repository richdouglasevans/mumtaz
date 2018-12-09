export function others(values, except) {
    return values.filter(value => value.name !== except.name);
}
