class Cell {
    constructor(x , y){
        this.isBomb = false;
        this.x = x;
        this.y = y;
        this.clicked = false;
        this.nieghbors = 0;
    }
}

class Grid {
    constructor(width, height, bombs){
        this.width = width;
        this.height = height;
        this.bombs = bombs;
        this.cells = []; 
        this.createCells();
        this.placeBombs();
        
    }

    createCells(){
        for(let y = 0; y < this.height; y++){
            const row = [];
            for(let x= 0; x < this.width; x++) {
                const cell = new Cell("empty", x , y);
                row.push(cell);
            }
            this.cells.push(row);
        }
    }


    placeBombs(){
        let bombsOnBoard = 0;
        while(bombsOnBoard < this.bombs){
            const randomY = getRandomInt(0,this.height - 1);
            const randomX = getRandomInt(0,this.width - 1);
            const cell = this.cells[randomY][randomX];
            if(!cell.isBomb){
                cell.isBomb = true;
                bombsOnBoard++;
            }

            
        }
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const grid = new Grid(8,8,20);