/* Definimos las coordenadas de cada una de las partes de la horca y del ahorcado */
let hangmanAxisData = 
[
    [453, 366.5, 747, 366.5],
    [533, 366.5, 533, 2.5],
    [535.5, 2.5, 713, 2.5],
    [713, 2.5, 713, 52],
    [713, 83.5, 31.5, 0],
    [713, 115, 713, 250],
    [713, 250, 680, 314],
    [713, 250, 746, 314],
    [713, 125, 680, 189],
    [713, 125, 746, 189]
];

/* Dibujamos la base de la horca */
draw(0);

function draw(index)
{
    /* Si llegamos a la parte de la cabeza dibujamos un circulo en lugar de lineas */
    if (index == 4)
    {
        drawCircles(hangmanAxisData[index][0], hangmanAxisData[index][1], hangmanAxisData[index][2]);
    }
    else
    {
        drawLines(hangmanAxisData[index][0], hangmanAxisData[index][1], hangmanAxisData[index][2], hangmanAxisData[index][3]);
    }
}

function drawLines(x,y, xEnd, yEnd)
{
    /* Definimos estilos */
    board.fillStyle = "#0A3871";
    board.lineWidth = 6;
    board.lineCap = "round";
    board.lineJoin = "round";
    /* Dibujamos la linea segun los datos dados */
    board.beginPath();
    board.moveTo(x,y);
    board.lineTo(xEnd,yEnd);
    board.stroke();
    board.closePath();
}

function drawCircles(x, y, radius)
{
    /* Definimos estilos */
    board.fillStyle = "#0A3871";
    board.lineWidth = 6;
    board.lineCap = "round";
    board.lineJoin = "round";
    /* Dibujamos un circulo segun los datos dados */
    board.beginPath();
    board.arc(x, y, radius, 0, 2*Math.PI);
    board.stroke();
    board.closePath();
}