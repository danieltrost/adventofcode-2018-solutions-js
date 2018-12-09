var fs = require('fs')

var overlapValues = function () {
    var values = fs.readFileSync('day3-input.txt', { encoding: 'utf8' }).split('\n')
    var result = []
    var unOverlappedValue = null

    for (var i = 0; i < 2; i++) {
        values.forEach((value) => {
            var id = value.split('@ ')[0]
            var destination = value.split('@ ')[1]
            var coordinates = destination.split(': ')[0]
            var dimensions = destination.split(': ')[1]

            var startX = parseInt(coordinates.split(',')[0])
            var startY = parseInt(coordinates.split(',')[1])

            var sizeX = parseInt(dimensions.split('x')[0])
            var sizeY = parseInt(dimensions.split('x')[1])

            if (i === 0) {
                for (var x = startX; x < startX + sizeX; x++) {
                    if (!Array.isArray(result[x])) result[x] = []
                    for (var y = startY; y < startY + sizeY; y++) {
                        if (!result[x][y]) result[x][y] = 1
                        else result[x][y]++
                    }
                }
            } else if (!unOverlappedValue && !hasCollisions(result, startX, startY, sizeX, sizeY)) unOverlappedValue = id
        })
    }

    return unOverlappedValue
}

var hasCollisions = function (arrs, x, y, sizeX, sizeY) {
    for (var i = x; i < sizeX + x; i++) {
        for (var j = y; j < sizeY + y; j++) {
            // console.log(i, j, arrs[i][j], arrs[i][j] !== 1)
            if (arrs[i][j] !== 1) return true
        }
    }

    return false
}

console.log(overlapValues())
