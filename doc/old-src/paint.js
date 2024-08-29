// Board configuration.
const board = {

    width: 800,
    height: 600,
    linecolor : "white",
    sizeline: 0,
    bgcolor: "#034306",
    canvas : null ,
    ctx : null,
    boards: [],
    isPressed: false,

    // Configure board screen for drawing/paint.
    setupCanvas: function( idcanvas,  w=800, h=600, 
        bgcolor = "#034306", linecolor = "white", sizeline = 1  ) {

        this.id = idcanvas;
        this.canvas = document.getElementById( idcanvas );
        this.ctx = this.canvas.getContext("2d");
        this.width = w;
        this.height = h;
        this.linecolor = linecolor;
        this.bgcolor = bgcolor;
        this.sizeline = sizeline;
        
        // Each board for workspace with many boards in a array.
        /*this.boards[0] = {
            ctx : this.ctx,
            canvas : this.canvas
        }*/
        console.log("Setup canvas "+this.canvas);
    },

    paint: function( ev ){

        xa = this.canvas.getBoundingClientRect().left
        yc = this.canvas.getBoundingClientRect().top
    
        offsetX =  ev.offsetX;// point canvas
        offsetY =  ev.offsetY;//
        
        x = px;
        y = py;
    
        px = (this.canvas.height/this.canvas.width)*(ev.clientX - xa);
        py = (this.canvas.height/this.canvas.width)*(ev.clientY - yc);
        console.log("Position: (" + px  + ", " +  py + ")");
        //ctx.fillRect(parseInt(px), parseInt(py), 2, 2);
        //console.log("event target", offsetX, offsetY );
        this.ctx.beginPath();
        this.ctx.moveTo(px,py);
        this.ctx.lineTo(x,y );
        //ctx.arc(x, y, 1, 0,  2*Math.PI );
        this.ctx.stroke();
        //ctx.fill()
        this.ctx.closePath();
        console.log("(px, py) = " + "("+px + ","+py + ")" + "(x,y) = "+ "("+x+", "+y+" )")

    },

    // Board events listenner.
    eventListener : function( ){
        console.log("> "+this.canvas);
        this.canvas.addEventListener("pointerdown", function( ev ){
            
            xa = this.canvas.getBoundingClientRect().left;
            yc = this.canvas.getBoundingClientRect().top;
            px = (this.canvas.height/this.canvas.width)*(ev.clientX - xa);
            py = (this.canvas.height/this.canvas.width)*(ev.clientY - yc);

            this.isPressed = true; // Botão do mouse pressionado
            
            //brushHandle( ev );
        } );

        this.canvas.addEventListener("pointermove", function( ev ){
            if ( this.isPressed )
                this.paint( ev );
        });

        this.canvas.addEventListener("pointerup", (ev) => { this.isPressed = false; x= 0; y = 0 }); // Notation: arrow function,  () => {}

    },

}
board.setupCanvas("canvas");
console.log(board.canvas, board.ctx);
board.eventListener();