export function incrementStreak(state) {
    const streak = state.streak + 1;
    const longestStreak = (state.longestStreak < streak)
        ? streak
        : state.longestStreak;
    return Object.assign({}, state, {
        streak,
        longestStreak
    });
};

export function resetStreak(state) {
    return Object.assign({}, state, {
        streak: 0
    });
}
