
function printPossibleCombination(x) {
    let i = 0
    while (i * 2 <= x) {
        calculatePossibleCbn('', i, x - i * 2)
        i++
    }
}

function calculatePossibleCbn(prefix, a, b) {
    if (a > 1) {
        for (let i = 0; i < a + b; i++) {
            let newPrefix = printArrayWithOneIndex(i, i + 1)
            calculatePossibleCbn(addToPrefix(prefix, newPrefix), a - 1, b - i)
        }
    } if (a == 1) {
        for (let i = 0; i <= b; i++) {
            console.log(addToPrefix(prefix, printArrayWithOneIndex(i, b + 1)))
        }
    } if (a == 0) {
        console.log(printArrayWithOneIndex(-1, b))
    }
}
function addToPrefix(prefix, toBeAdded) {
    return prefix ? (prefix + '-' + toBeAdded) : toBeAdded
}

function printArrayWithOneIndex(idx, length) {
    const arr = []
    for (let i = 0; i < length; i++) {
        if (i === idx) {
            arr.push(2)
        } else {
            arr.push(1)
        }
    }
    return arr.join('-')
}

function main() {
    const input = process.argv[2]
    printPossibleCombination(input)
}

main()