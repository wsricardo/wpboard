/*
*   WPBoard
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
let isPressed = false;
let x = 0;
let y = 0;
let px = 0;
let py = 0;

ctx.fillStyle = "white";
ctx.strokeStyle = "white";
ctx.imageSmoothingEnabled = true;

// Download image for capture screen in blackboard.
function download(){
    const c = documento.getElementById("download-image");
    const img = canvas.toDataURL('image/jpeg', 1);
    console.log(img);

}


// Capture image for current screen.
function brushHandle( ev ){
    
    xa = canvas.getBoundingClientRect().left
    yc = canvas.getBoundingClientRect().top

    offsetX =  ev.offsetX;// point canvas
    offsetY =  ev.offsetY;//
    
    x = px;
    y = py;

   // px = (canvas.width/viewport.clientWidth)*ev.clientX - xa ;
   // py = (canvas.height/viewport.clientHeight)*ev.clientY -yc ;
    px = (canvas.height/canvas.width)*(ev.clientX - xa);
    py = (canvas.height/canvas.width)*(ev.clientY - yc);
    console.log("Position: (" + px  + ", " +  py + ")");
    //ctx.fillRect(parseInt(px), parseInt(py), 2, 2);
    //console.log("event target", offsetX, offsetY );
    ctx.beginPath();
    ctx.moveTo(px,py);
    ctx.lineTo(x,y );
    //ctx.arc(x, y, 1, 0,  2*Math.PI );
    ctx.stroke();
    //ctx.fill()
    ctx.closePath();
    console.log("(px, py) = " + "("+px + ","+py + ")" + "(x,y) = "+ "("+x+", "+y+" )")
    
}

// Events.
/*canvas.addEventListener("click", function ( ev ) {
    isPressed = true;
    brushHandle( ev );
} );*/

canvas.addEventListener("pointerdown", function( ev ){
    xa = canvas.getBoundingClientRect().left
    yc = canvas.getBoundingClientRect().top
    px = (canvas.height/canvas.width)*(ev.clientX - xa);
    py = (canvas.height/canvas.width)*(ev.clientY - yc);

    isPressed = true; // Botão do mouse pressionado
    
    //brushHandle( ev );
} );
canvas.addEventListener("pointermove", function( ev ){
    if ( isPressed )
        brushHandle( ev );
});
canvas.addEventListener("pointerup", (ev) => { isPressed = false; x= 0; y = 0 }); // Notation: arrow function,  () => {}

// ------
