var c = {

    /**
     * HTML canvas
     * @type {HTMLCanvas}
     */

    canvas: null,

    /**
     *
     * New Circle
     * @type {Circle}   
     *
     */

    o: new PhSim.Options.Circle(0,0,0),

    prev: null,

    onmouseclick: function(event) {

        if (typeof c.o.x === "number" && typeof c.o.y === "number") {
            c.o.radius = PhSim.Vector.distance(event.offsetX,offsetY,c.o.x,c.o.y);
            c.prev = c.o;
            c.o = new PhSim.Options.Circle(0,0,0);    
        }

        
        else {
            c.o.x = event.offsetX;
            c.o.y = event.offsetY;
        }

    }

    
};

module.exports = c;
