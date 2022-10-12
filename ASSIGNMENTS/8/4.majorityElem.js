function majority(arr) {
    const map = arr.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());

    const sortMap = new Map([...map].sort().reverse());

    const highestPair = [...sortMap.entries()][0];

    return highestPair[0];
}

const arr = [2, 2, 1, 1, 1, 2, 2];
const res = majority(arr);
console.log(res)