// Код для первого задания напиши в этой функции

function crawlTree(arr) {

    if (!Array.isArray(arr)) {
        return arr
    }
    else {
        if (arr.length > 1) {
            return crawlTree(arr[0]) + crawlTree(arr.slice(1))
        } else {
            return crawlTree(arr[0])
        }
    }
}

// Код для второго задания напиши в этой функции
function twoSum(arr, target) {
    function executer(i, j) {
        if (arr[i] + arr[j] == target) {
            return [i, j]
        }
        if (j < arr.length) {
            return executer(i, j + 1)
        } else {
            if (i < arr.length - 1) {
                return executer(i + 1, i + 2)
            }
        }
    }
    return executer(0, 1)
}

// Всё, что ниже, нужно для тестов. Не изменяй этот код
const functions = { crawlTree, twoSum };
module.exports = functions;
