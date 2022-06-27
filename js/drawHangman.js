/* Seleccionar canvas y obtener contexto 2d */
const hangman = document.querySelector(".hangmanDraw");
const plano = hangman.getContext("2d");

/* Definir medidas del dibujo */
const lineWidth = 5;
const headRadius = 27;
const xStartHangman = 80;
const gallowsWidth = 178;
const gallowsRopeHeight = 44;
const body = 135;
const bodyPartsHeight = 71;
const bodyPartsWidth = 36;
const xStartBody = xStartHangman + gallowsWidth - lineWidth;
const yStartBody = gallowsRopeHeight + (headRadius*2);
const xMiddleHangman = xStartBody + (lineWidth/2);
const startLegs = yStartBody + body;

/* Cargar medidas y selector de forma a dibujar en un array ordenado segun el jugador falle */
const varDraw = 
[
    /* Dibujar base horca */
    ["a", 0, 360 - lineWidth, 294, lineWidth],
    /* Dibujar soporte vertical horca */
    ["a", xStartHangman, 0, lineWidth, 360],
    /* Dibujar soporte horizontal horca */
    ["a", xStartHangman, 0, gallowsWidth, lineWidth],
    /* Dibujar cuerda horca */
    ["a", xStartBody, 0, lineWidth, gallowsRopeHeight],
    /* Dibujar cabeza */
    ["c", xMiddleHangman, gallowsRopeHeight + headRadius, headRadius, null], 
    /* Dibujar cuerpo */
    ["a", xStartBody, yStartBody, lineWidth, body],
    /* Dibujar pierna derecha del muñeco */
    ["b", xMiddleHangman, startLegs, xMiddleHangman - bodyPartsWidth, startLegs + bodyPartsHeight],
    /* Dibujar pierna izquierda del muñeco */
    ["b", xMiddleHangman, startLegs, xMiddleHangman + bodyPartsWidth, startLegs + bodyPartsHeight],
    /* Dibujar brazo derecho del muñeco */
    ["b", xMiddleHangman, yStartBody, xMiddleHangman - bodyPartsWidth, yStartBody + bodyPartsHeight],
    /* Dibujar brazo izquierdo del muñeco */
    ["b", xMiddleHangman, yStartBody, xMiddleHangman + bodyPartsWidth, yStartBody + bodyPartsHeight]
]
/* X>9 */

/* Dibujar en un canvas con contexto 2d */
function draw (plano, selector, x, y, a, b)
{
    /* Seleccionar que figura dibujar */
    if (selector == "a")
    {
        drawRect(plano, x, y, a, b);
    }
    else if (selector == "b")
    {
        drawDiagonal(plano, x, y, a, b);
    }
    else if (selector == "c")
    {
        drawCircle(plano, x, y, a);
    }
}

/* Dibujar rectas derechas */
function drawRect (plano, x, y, width, height)
{
    plano.fillStyle = "#0A3871";
    plano.fillRect(x, y, width, height);
}

/* Dibujar rectas en diagonal */
function drawDiagonal (plano, x, y, xEnd, yEnd)
{
    plano.strokeStyle = "#0A3871";
    plano.beginPath();
    plano.moveTo(x, y);
    plano.lineWidth = lineWidth;
    plano.lineTo(xEnd, yEnd);
    plano.stroke();
}

/* Dibujar circulos */
function drawCircle (plano, x, y, radius)
{
    plano.beginPath();
    plano.lineWidth = lineWidth;
    plano.strokeStyle = "#0A3871";
    plano.arc(x, y, radius, 0, 2*Math.PI);
    plano.stroke();
}