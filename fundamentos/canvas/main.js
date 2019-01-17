let d = document.getElementById("dibujo");
let lienzo = d.getContext("2d")
let colores = [
    'chocolate',
    'chocolate',
    'black',
    'red',
    'cornflowerblue',
    'red'
]

let i = 0;

let color = 'red'


let derecha = (x,y) => {
    lienzo.beginPath();
    lienzo.strokeStyle = color
    lienzo.moveTo(x,y);
    lienzo.lineTo(x+10,y);
    lienzo.stroke();
    lienzo.closePath();
    return {x:x+10,y:y}
}

let izquierda = (x,y) => {
    lienzo.beginPath();
    lienzo.strokeStyle = color
    lienzo.moveTo(x,y);
    lienzo.lineTo(x-10,y);
    lienzo.stroke();
    lienzo.closePath();
    return {x:x-10,y:y}
}

let abajo = (x,y) => {
    lienzo.beginPath();
    lienzo.strokeStyle = color
    lienzo.moveTo(x,y);
    lienzo.lineTo(x,y+10);
    lienzo.stroke();
    lienzo.closePath();
    return {x:x,y:y+10}
}

let arriba = (x,y) => {
    lienzo.beginPath();
    lienzo.strokeStyle = color
    lienzo.moveTo(x,y);
    lienzo.lineTo(x,y-10);
    lienzo.stroke();
    lienzo.closePath();
    return {x:x,y:y-10}
}



let mover = (x,y) => {

    if(y >= 10 && x < 180 && y <= 10){
        console.log('derecha',derecha(x,y))
        return derecha(x,y);
    }
    
    if(y >= 10 && x >= 180 && y < 180){
        console.log('abajo',abajo(x,y))
        return abajo(x,y)
    }

    if(y >= 180 && x <= 180 && x >=20){
        console.log('izq',izquierda(x,y))
        return izquierda(x,y)
    }

    if( y <= 180 && x == 10){
        console.log('arriba',arriba(x,y))
        return arriba(x,y);
    }

}


let loop = (_x,_y) => {
    if(_y == 10 && _x == 10){ i = i + 1; }
    if(_y == 10 && _x == 10 && i < 5) { color = colores[i] }
    else if(i >= 5){ return console.log('termino') }

    console.log('iniciamos')
    let {x,y} = mover(_x,_y);

    if(x == undefined) return console.log('termino')
    setTimeout( () => loop(x,y),50)
}

