/* Obtenemos el tablero donde estaremos dibujando (letras, horca, ahorcado, etc.) */
var board = document.querySelector(".board").getContext("2d");

/* Definimos el largo de la linea */
const underlineWidth = 50;
/* Definimos el espacio que hay entre linea y linea, procurando que todas las lineas y espacios ocupen 600 unidades de largo y esten siempre centradas */
const gapWidth = (600 - (underlineWidth * hiddenWord.length)) / (hiddenWord.length - 1);
    
drawLines(underlineWidth, gapWidth);
drawTopic(topic);

function drawLines(underlineWidth, gapWidth)
{
    /* Definimos el punto de inicio de las lineas */
    let x = 300;
    /* Definimos estilos de la linea */
    board.lineWidth = 6;
    board.lineCap = "round";
    board.lineJoin = "round";
    board.strokeStyle = "#0A3871";
    /* Dibujamos las lineas */
    board.beginPath();
    for(let i = 0; i < hiddenWord.length; i++)
    {
        board.moveTo(x, 640);
        x += underlineWidth;
        board.lineTo(x, 640);
        x += gapWidth;
    }
    board.stroke();
    board.closePath();
}

function drawTopic(topic)
{
    /* Definimos estilos */
    board.font = "bold 60px Inter";
    board.lineWidth = 8;
    board.lineCap = "round";
    board.lineJoin = "round";
    board.fillStyle = "#0A3871";
    board.textAlign = "center";
    /* Escribimos el tema de la palabra */
    board.fillText(topic, 600, 500);
}