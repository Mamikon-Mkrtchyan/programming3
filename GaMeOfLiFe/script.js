function matrixGenerator(matrixSize, grass, grassEater, predator, jur,lava,) {
    var matrix = []

    for (let i = 0; i < matrixSize; i++) {
        matrix.push([])
        for (let j = 0; j < matrixSize; j++) {
            matrix[i].push(0)

        }
    }


    for (let i = 0; i < grass; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 1

    }

    for (let i = 0; i < grassEater; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 2

    }



    for (let i = 0; i < predator; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 3

    }


    for (let i = 0; i < jur; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 4


    }


    for (let i = 0; i < lava; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 5


    }










    return matrix
}

var matrix = matrixGenerator(30, 40, 15, 5, 16, 13,0)
var side = 25
//

var grassArr = []
var grassEaterArr = []
var predatorArr = []
var jurArr = []
var lavaArr = []



function setup() {
    frameRate(15)

    createCanvas(matrix[0].length * side, matrix.length * side)

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                var grEat = new GrassEater(x, y)
                grassEaterArr.push(grEat)
            } else if (matrix[y][x] == 3) {
                var pred = new Predator(x, y)
                predatorArr.push(pred)
            } else if (matrix[y][x] == 4) {
                var jr = new Jur(x, y)
                jurArr.push(jr)
            } else if (matrix[y][x] == 5) {
                var lv = new Lava(x, y)
                lavaArr.push(lv)
            }
            


        }
    }

}



function draw() {

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green")
            } else if (matrix[y][x] == 2) {
                fill("yellow")
            } else if (matrix[y][x] == 3) {
                fill("purple")
            } else if (matrix[y][x] == 4) {
                fill("blue")
            }else if (matrix[y][x] == 5) {
                fill("red")
             }
            else if (matrix[y][x] == 7) {
                fill("black")
            }
            else {
                fill("gray")
            }
            rect(x * side, y * side, side, side,)
        }

    }

    for (let i in grassArr) {
        grassArr[i].mul()
        grassArr[i].eat()

    }

    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()

    }



    for (let i in predatorArr) {
        predatorArr[i].eat()
    }


    for (let i in jurArr) {
        jurArr[i].eat()
        jurArr[i].die()
    }
    for (let i in lavaArr) {
        lavaArr[i].die()
    }
    

}