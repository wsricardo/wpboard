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
let isPressed = false;
let x = 0;
let y = 0;
let px = 0;
let py = 0;

ctx.fillStyle = "white";
ctx.strokeStyle = "white";
ctx.imageSmoothingEnabled = true;
//ctx.fillRect( 110, 10, 1, 10);

/*
ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(25, 30);
ctx.lineWidth = 1;
ctx.stroke();
*/


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
    ctx.stroke();
    ctx.closePath();
    
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


// Touch & (pen) Events
/*
// Touchstart -> started touch on surface
canvas.addEventListener("touchstart", ( ev ) => {
    ev.preventDefault();
    const touches = ev.changedTouches;

    var touch = ev.touches;

    xa = canvas.getBoundingClientRect().left
    yc = canvas.getBoundingClientRect().top
    px = (canvas.height/canvas.width)*(touch.clientX - xa);
    py = (canvas.height/canvas.width)*(touch.clientY - yc);
    
    isPressed = true;
    
});

// Touched move throw surface.
canvas.addEventListener("touchmove", ( ev ) => {
    ev.preventDefault();
    if ( isPressed )
        brushHandle( ev );
});

// End touch. touch is false for isPressed with value false.
canvas.addEventListener("touchend", ( ev ) => {
    ev.preventDefault();
    isPressed = false;
    x = 0;
    y = 0;
});*/
// ------

/*
*   Create digital blackboard for drawing figures and paint.
*/
class Board {
    // Constructor method
    constructor(){}

    // Other methods for create and update e rendering.
    //...


}