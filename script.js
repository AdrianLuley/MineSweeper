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
// Default Mapp //
let mapDiv = document.getElementById("gameBoard");
var row;
var column;
// button timer variables //
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
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

        let column = document.createElement("div");
        column.classList.add("column");
        row.appendChild(column);
        if (newMap[y] == "X") {
            column.style.backgroundColor = "grey";

        } 
    }

    // appends row(the maze) to the HTML Div //
    mapDiv.appendChild(row);

}
// function clickToReval(event) {
//    column.style.backgroundColor = "white";
   
    
    // this.img.style.position = "absolute";
    // this.img.style.left = x + "px";
    // this.img.style.top = y + "px";
    // target_div.appendChild(this.img);

    // this.column.addEventListener('click', this) 
    // this.handleEvent = function(event) {
    //     if ( ){
            
    //     }
            
    //     };

    // click to reval will replace the grey box with a white background and then show neighboring bombs //

    // the for loop should randomize the bomb placement //

    // for (var i = 0; i < 5; i++) {
    //     var x = 150 * i;
    //     var y = Math.floor(Math.random() * 500);
    //     var  = ;
    // }
    