function drawWrongLetter(userErrors)
{
    /* Borramos letras escritas anteriormente */
    board.fillStyle = "#F3F5FC";
    board.fillRect(0, 690, 1200, 800);
    /* Definimos estilos */
    board.font = "bold 30px Inter";
    board.lineWidth = 6;
    board.lineCap = "round";
    board.lineJoin = "round";
    board.fillStyle = "#0A3871";
    /* Definimos el inicio del eje x del array de las letras erradas (de manera que estas queden en el centro) */
    let xStart = 600 - (((userErrors.length-1)/2 * 30) + (10 * (userErrors.length - 1)));
    /* Escribimos las letras erradas */
    for (let i = 0; i < userErrors.length; i++)
    {
        board.fillText(userErrors[i] ,xStart, 740);
        /* Nos movemos un espacio de 20 y el espacio ocupado de la letra */
        xStart += 50;
    }
}