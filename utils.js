export function makeStatsString(headCount, middleCount, bottomCount) {
    return `You clicked on the head ${headCount} ${timesOrTime(headCount)}, on the middle ${middleCount} ${timesOrTime(middleCount)}, and on the bottom ${bottomCount} ${timesOrTime(bottomCount)}. And everybody loves your character's catchphrases:`;
}

function timesOrTime(count) {
    if (count === 1) {
        return 'time';
    } else {
        return 'times';
    }
}