function drawCorrectLetter (index)
{
    /* Definimos estilos */
    board.font = "bold 50px Inter";
    board.lineWidth = 6;
    board.lineCap = "round";
    board.lineJoin = "round";
    board.fillStyle = "#0A3871";
    /* Definimos la ubicacion de las letras, de manera que coincida con las lineas y ademas esten centradas */
    let move = (300 + (underlineWidth/2)) + ((underlineWidth + gapWidth) * index);
    board.fillText(hiddenWord[index], move, 620);
}