function solution(inputArray) {
    return inputArray.filter(x => x.length === Math.max(...inputArray.map(x => x.length)));
}

module.exports = solution;
