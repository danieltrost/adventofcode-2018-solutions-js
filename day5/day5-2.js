var fs = require('fs')
var testValue = fs.readFileSync('day5-input.txt', { encoding: 'utf8' })
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var findMin = function (value) {
    var minLength = value.length

    letters.forEach((letter) => {
        var tmpValue = value.replace(new RegExp(letter, 'g'), '').replace(new RegExp(letter.toUpperCase(), 'g'), '')
        var length = consolidate(tmpValue)

        if (length < minLength) minLength = length
    })

    return minLength
}

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

console.log(findMin(testValue))
