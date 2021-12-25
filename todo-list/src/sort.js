


function sortByComplete(arr) {
    let arr1 = arr.filter((task) => !task.isComplete);
    let arr2 = arr.filter((task) => task.isComplete);
    return [arr1, arr2];
}

function sortByDate(arr) {
    return arr.sort((a, b) => a.date.getTime() - b.date.getTime());
}

function sortByPriority(arr) {
    return arr.sort((a, b) => b.priority - a.priority);
}
function sortByDateDone(arr) {
    return arr.sort((a, b) => b.dateDone.getTime() - a.dateDone.getTime());
}

export {sortByPriority, sortByDateDone, sortByDate, sortByComplete}