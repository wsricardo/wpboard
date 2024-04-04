/*
*   WBlackboard
*   Author: WSRicardo
*   Blog: https://wsricardo.blogspot.com
*   Youtube Channel: https://www.youtube.com/@wsricardo23
*   Github: https://github.com/wsricardo
*
*/

const canvas = document.getElementById("canvas");
const viewport = document.getElementById("main");
const ctx = canvas.getContext("2d");

let offsetX;
let offsetY;

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


// Capture image for current screen.
function brushHandle( ev ){
    px = 0;
    py = 0;
    xa = canvas.getBoundingClientRect().left
    yc = canvas.getBoundingClientRect().top

    ctx.fillRect(px, py, 2, 2);
    console.log("event target", offsetX, offsetY );
    
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