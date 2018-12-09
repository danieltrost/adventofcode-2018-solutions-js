var fs = require('fs')

var overlapValues = function () {
    var values = fs.readFileSync('day3-input.txt', { encoding: 'utf8' }).split('\n')
    var result = []
    var total = 0

    values.forEach((value) => {
        var destination = value.split('@ ')[1]
        var coordinates = destination.split(': ')[0]
        var dimensions = destination.split(': ')[1]

        var startX = parseInt(coordinates.split(',')[0])
        var startY = parseInt(coordinates.split(',')[1])

        var sizeX = parseInt(dimensions.split('x')[0])
        var sizeY = parseInt(dimensions.split('x')[1])

        for (var x = startX; x < startX + sizeX; x++) {
            if (!Array.isArray(result[x])) result[x] = []
            for (var y = startY; y < startY + sizeY; y++) {
                if (!result[x][y]) result[x][y] = 1
                else result[x][y]++
            }
        }
    })

    return calculateTotalOverlapped(result)
}

var calculateTotalOverlapped = function (arrs) {
    var total = 0

    arrs.forEach((arr) => {
        arr.forEach((val) => {
            if (val > 1) total++
        })
    })

    return total
}

console.log(overlapValues())
