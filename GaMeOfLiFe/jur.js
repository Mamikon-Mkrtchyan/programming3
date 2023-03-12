class Jur {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.energy = 12
        this.directions = []
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(char,char1,char2) {
        this.getNewCoordinates();
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
            } if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char2) {
                    found.push(this.directions[i]);
                }
            }
    


        }

        return found;
    }
    //բազմանալ
    mul() {
        let emptyCell = this.chooseCell(0);
        let newCell = random(emptyCell)
        console.log(newCell);
        if (newCell && this.energy > 5) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[newY][newX] = 4;
            let jr = new Jur(newX, newY);
            jurArr.push(jr);

            this.energy = 12;
        }
    }


    //ուտել
    eat() {
        let emptyCell = this.chooseCell(2,3,5);
        let newCell = random(emptyCell)

        if (newCell) {
            this.energy += 5;
            let newX = newCell[0];
            let newY = newCell[1];

            


                for (let i = 0; i < grassEaterArr.length; i++) {
                    if (grassEaterArr[i].x == newX && grassEaterArr[i].y == newY) {
                        grassEaterArr.splice(i, 1)
                        break;
                    }

                }

                for (let i = 0; i < predatorArr.length; i++) {
                    if (predatorArr[i].x == newX && predatorArr[i].y == newY) {
                        predatorArr.splice(i, 1)
                        break;

                
                    }

                } 
        
                for (let i = 0; i < lavaArr.length; i++) {
                    if (lavaArr[i].x == newX && lavaArr[i].y == newY) {
                        lavaArr.splice(i, 1)
                        jurArr.splice(i, 1)
                        matrix[newY][newX] = 6;
                matrix[this.y][this.x] = 0;

                        break;

                
                    }

                } 
                matrix[newY][newX] = 4;
                matrix[this.y][this.x] = 0;

                this.x = newX;
                this.y = newY;

                if (this.energy > 18) {
                    this.mul()
                }
            
        
       
            }
             else {
                    this.move()
                }
    }
           // քայlel
            move() {
                let emptyCell = this.chooseCell(0);
                let newCell = random(emptyCell)

                if (newCell) {
                    let newX = newCell[0];
                    let newY = newCell[1];

                    matrix[newY][newX] = 4;
                    matrix[this.y][this.x] = 0;


                    this.x = newX;
                    this.y = newY;


                   
                }

            }
        die() {

            let emptyCell=this.chooseCell(5)
            let newCell=random(emptyCell)

            if(newCell){

                let newX = newCell[0]
                let newY = newCell[1]

                for (let i = 0; i < jurArr.length; i++) {
                    if (jurArr[i].x == this.x &&jurArr[i].y == this.y) {
                       jurArr.splice(i, 1)

                       for(let i=0;i<15;i++){
                        matrix[newY][newX]=7
                        matrix[this.y][this.x]=0
                       }
                    }
                }

              } 
                     
            }
 

        }
