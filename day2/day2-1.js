var fs = require('fs')

var checksum = function () {
    var values = fs.readFileSync('day2-input.txt', { encoding: 'utf8' }).split('\n')
    var twoCount = 0, threeCount = 0

    values.forEach((val) => {
        var letterCount = {}
        var hasAddedTwo = false, hasAddedThree = false

        for (var i = 0; i < val.length; i++) {
            var letter = val[i]

            if (!letterCount.hasOwnProperty(letter)) letterCount = { ...letterCount, [letter]: 1 }
            else letterCount[letter]++
        }

        Object.entries(letterCount).forEach(([key, value]) => {
            if (!hasAddedTwo && value === 2) {
                twoCount++
                hasAddedTwo = true
            } else if (!hasAddedThree && value === 3) {
                threeCount++
                hasAddedThree = true
            }
        })
    })

    return twoCount * threeCount
}

console.log(checksum())
