var fs = require('fs')

var similarCharacters = function () {
    var values = fs.readFileSync('day2-input.txt', { encoding: 'utf8' }).split('\n')

    for (var i = 0; i < values.length - 1; i++) {
        for (var x = 1; x < values.length; x++) {
            if (oneMissMatch(values[i], values[x])) return matchingCharacters(values[i], values[x])
        }
    }

    return null
}

var matchingCharacters = function (value1, value2) {
    var result = ''

    for (var i = 0; i < value1.length; i++) {
        if (value1[i] === value2[i]) result += value1[i]
    }

    return result
}

var oneMissMatch = function (value1, value2) {
    var totalMisses = 0

    for (var i = 0; i < value1.length; i++) {
        if (totalMisses > 1) break

        if (value1[i] !== value2[i]) totalMisses++
    }

    return totalMisses === 1
}

console.log(similarCharacters())
