const map = [
    "XXXXXXXX",
    "XXXXXXXX",
    "XXXXXXXX",
    "XXXXXXXX",
    "XXXXXXXX",
    "XXXXXXXX",
    "XXXXXXXX",
    "XXXXXXXX"
].map(function (row) {
    return row.split("");
});
// Look at file: Multiplication for arbitary use of board//
// Default Mapp //
let mapDiv = document.getElementById("gameBoard");
var row;
var column;
// button timer variables //
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
var number_of_mines_to_place = 5;
setInterval(setTime, 1000);
// function for timer //
function setTime() {
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}
// for loop for displaying the map //
for (let x = 0; x < map.length; x++) {
    var newMap = map[x];
    let row = document.createElement("div");
    row.classList.add("row");


    for (let y = 0; y < newMap.length; y++) {

        let cell = new Cell();
        
        row.appendChild(cell.div);
        if (newMap[y] == "X") {
            cell.div.style.backgroundColor = "grey";

        }
    }

    // appends row(the maze) to the HTML Div //
    mapDiv.appendChild(row);

}
// Returns a random integer between min and max //

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//from MDN //
// from Mike , displays bombs on board as "B" and randomly and randomly places them //
var unplaced_mines = number_of_mines_to_place;
while (unplaced_mines > 0) {
    // Pick a random row
    // Pick a random column
    var row = getRandomInt(0, map.length - 1);
    var column = getRandomInt(0, map[0].length - 1);
    /* the square at (row, column) is empty */
    
    var cell = map[row][column];
    if (cell === "X") {
        unplaced_mines--;
        map[row][column] = "B";
        // Place a mine in the square at (row, column)
    }
}


function Cell() {
    this.div = document.createElement("div");
    this.div.classList.add("cell");
    
    
    this.div.addEventListener('click', this);
    
    this.handleEvent = function(event) {
        this.div.style.backgroundColor = "white";
    
        };
}

  

    

    // click to reval will replace the grey box with a white background and then show neighboring bombs //

    // the for loop should randomize the bomb placement //

    // for (var i = 0; i < newMap.length; i++) {
    //     var x = 70 * i;
    //     var y = Math.floor(Math.random() * 5);

    // }