/*
*
* Author: Wandeson Ricardo
* Blog: wsricardo.blogspot.com
*
*/


// View canvas and context.
const canvas = document.getElementById("canvas");
const viewport = document.getElementById("main");
const ctx = canvas.getContext("2d");

// Auxiliar variables.
let x, y, xlast, ylast;
let isPressed = false;

ctx.fillStyle = "white";
ctx.strokeStyle = "white";
ctx.imageSmoothingEnabled = true;

// Proccess event pointer and draw pixels.
function handleDraw( ev ){

    ctx.beginPath();
    ctx.moveTo( xlast, ylast );
    ctx.lineTo( x, y );
    ctx.stroke();
    ctx.closePath();
    console.log("draw "+x+" "+y)

}

// Add event listen.
canvas.addEventListener("pointerup", ( ev ) => { 
  isPressed = false;
 });

canvas.addEventListener("pointermove", ( ev ) => {
    xlast = x;
    ylast = y;
    x = ev.clientX;
    y = ev.clientY;
    if ( isPressed )
        handleDraw( ev );
 });

canvas.addEventListener("pointerdown", ( ev ) => { 
    isPressed = true;
    x = ev.clientX;
    y = ev.clientY;
 });