class Lava{
    constructor(x, y) {
        this.x = x
        this.y = y

    }
    chooseCell(char) {
       
        let found = [];

        for (let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];

            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char) {
                    found.push(this.directions[i]);
                }
            }

            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char1) {
                    found.push(this.directions[i]);
                }
            }

            
        }

        return found;
    }

    die() {
        let emptyCell= this.chooseCell(4)
        let newCell=random(emptyCell)

        if(newCell){

            let newX = newCell[0]
            let newY = newCell[1]

            for (let i = 0; i < lavaArr.length; i++) {
                if (lavaArr[i].x == this.x &&lavaArr[i].y == this.y) {
                   lavaArr.splice(i, 1)
                   for(let i=0;i<15;i++){
                    matrix[newY][newX]=7
                    matrix[this.y][this.x]=0
                   }
                }
            }

          } 
        // for (let i = 0; i < lavaArr.length; i++) {
        //     if (lavaArr[i].x == this.x &&lavaArr[i].y == this.y) {
        //        lavaArr.splice(i, 1)
        //     }
        // }
        // matrix[this.y][this.x] = 0;

        // for(let x = 0;x<matrix.length;x++){
        //      for(let y=0; y<matrix[x].length;y++){
        //             if(matrix[x][y]==4){
        //                 matrix[x][y]=6
        //             }
        //      }
        // }
    }

}


