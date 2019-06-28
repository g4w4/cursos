document.addEventListener("keydown", (e) => keys[e.keyCode].f() )
const lienzo = document.getElementById("lienzo").getContext("2d");
let Y = 150;
let X = 150;
const largo = 20;
const movPos = 10
const movNeg = -10;
let i = 0;

const keys = {
    37 : { name : "ArrowLeft", f : () => mover(movNeg,0) },
    38 : { name : "ArrowUp", f : () => mover(0,movNeg) },
    39 : { name : "ArrowRight", f : () => mover(movPos,0) },
    40 : { name : "ArrowDown", f : () => mover(0,movPos) },
}

const _keys = {
    37 : { name : "ArrowLeft", f : () => mover(movNeg,0,true) },
    38 : { name : "ArrowUp", f : () => mover(0,movNeg,true) },
    39 : { name : "ArrowRight", f : () => mover(movPos,0,true) },
    40 : { name : "ArrowDown", f : () => mover(0,movPos,true) },
}

let mover = (x,y,debug = false) => {
    console.log(i++)
    if(debug) return {x:X+x,y:Y+y}
    lienzo.beginPath();
    lienzo.strokeStyle = 'red'
    lienzo.lineWidth = 2;
    lienzo.moveTo(X,Y);
    X=X+x; Y=Y+y;
    lienzo.lineTo(X,Y);
    lienzo.stroke();
    lienzo.closePath();
}

let _map = new Map();
let rand = () => {
    let r = Math.ceil(Math.random() * (40 - 36) + 36)
    r = (X >= 500) ? 37 : (Y >= 300) ? 38 : (X <= 0) ? 39 : (Y<=0) ? 40 : r
    if(_keys[r]){
        let {x,y} = _keys[r].f()
        let coordenada = `${x},${y}`
        _map.set(coordenada,'value')
        keys[r].f();
    }
}

mover(5,0)

//let t = setInterval( () => rand() , 1)

//setTimeout( () => clearInterval(t) , 60000)






