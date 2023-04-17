//нашла решение twoSum хэш-таблицей

const sumHach = (arr, target) => {
    let result = {}
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        result[arr[i]] = i
    }

    for (let i = 0; i < arr.length; i++) {
        let diff = target - arr[i]

        if (result[diff] && result[diff] !== i) {
            newArr.push(i, result[diff])
            return newArr
        }
    }
}
console.log(sumHach([3, 2, 4], 6));
console.log(sumHach([2, 4, 1, 7, 5, 6, 11], 10));