var fs = require('fs')
var testValue = fs.readFileSync('day5-input.txt', { encoding: 'utf8' })

var consolidate = function (value) {
    var i = 0
    while (i < value.length - 1) {
        if (
            value[i].toLowerCase() === value[i + 1].toLowerCase() &&
            (
                (value[i] === value[i].toLowerCase() && value[i + 1] === value[i + 1].toUpperCase()) ||
                (value[i] === value[i].toUpperCase() && value[i + 1] === value[i + 1].toLowerCase())
            )
        ) {
            value = value.slice(0, i) + value.slice(i + 2)
            i = (i - 1 >= 0) ? i - 1 : 0
        } else {
            i++
        }
    }

    return value.length
}

console.log(consolidate(testValue))
