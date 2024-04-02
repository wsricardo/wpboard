/*
*   WBlackboard
*   Author: WSRicardo
*   Blog: https://wsricardo.blogspot.com
*   Youtube Channel: https://www.youtube.com/@wsricardo23
*   Github: https://github.com/wsricardo
*
*/

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "white";
ctx.strokeStyle = "white";
ctx.imageSmoothingEnabled = true;
//ctx.fillRect( 110, 10, 1, 10);

ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(25, 30);
ctx.lineWidth = 1;
ctx.stroke();



// Download image for capture screen in blackboard.
function download(){
    const c = documento.getElementById("download-image");
    const img = canvas.toDataURL('image/jpeg', 1);
    console.log(img);

}

// Listen event click in link for tag a with id "download-image"
// Capture image for current screen.
function brushHandle( ev ){
    
    console.log( "event detected ")
    console.log("Position: (" +   ev.screenX  + ", " +  ev.screenY + ")");
    ctx.fillRect(ev.screenX  , ev.screenY, 5, 5);
    console.log("event target", ev.target.offsetLeft, ev.target.offsetTop );

}

canvas.addEventListener("click", brushHandle );


/*
*   Create digital blackboard for drawing figures and paint.
*/
class Board {
    // Constructor method
    constructor(){}

    // Other methods for create and update e rendering.
    //...


}