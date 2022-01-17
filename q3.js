const fs = require('fs');

function calculateTransaction(lines) {
    const dict = {}
    lines.forEach(line => {
        transaction = line.split(',')
        if (transaction.length === 3) {
            if (!dict[transaction[0]]) {
                dict[transaction[0]] = { [transaction[1]]: parseInt(transaction[2]) }
            } else {
                if (!dict[transaction[0]][transaction[1]]) {
                    dict[transaction[0]][transaction[1]] = parseInt(transaction[2])
                } else {
                    dict[transaction[0]][transaction[1]] += parseInt(transaction[2])
                }
            }

        }
    });
    return dict
}

function main() {
    try {
        let filePath = process.argv[2]
        if (!filePath) {
            filePath = './transaction.txt'
        }
        const data = fs.readFileSync(filePath, 'utf8')
        const lines = data.split(/\r?\n/);

        const result = calculateTransaction(lines)
        console.log(result)
    } catch (err) {
        console.error(err)
    }
}

main()