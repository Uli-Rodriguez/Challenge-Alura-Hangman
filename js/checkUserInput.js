/* Obtenemos las teclas de nuestro teclado virtual */
const keyBoardButtons = document.querySelectorAll(".teclas");
/* Obtenemos nuestro boton de rendirse/nuevo juego */
const surrenderButton = document.querySelector("#GGWPffal15");

/* Array con los errores del usuario (letras incorrectas) */
var userErrors = [];
/* Indice para recorrer el dibujo del ahorcado */
let hangmanIndex = 1;
/* Array para guardar las letras correctas que el usuario ya ingreso */
let correct = [];
/* Variables que nos indican si el usuario ya gano o ya perdio */
let winner = false;
let loser = false;



keyBoardButtons.forEach(letterButton =>
{
    letterButton.addEventListener("click", letter =>
        {
            /* Si el juego continua */
            if (!winner && !loser)
            {
                let letterFound = false;
                /* Buscamos si la letra que ingreso el usuario es correcta y ya la ingreso previamente */
                if (correct.join("").includes(letter.target.textContent))
                {
                    letterFound = true;
                    /* Alertamos al usuario que ya ingreso previamente esa letra */
                    Swal.fire({
                        title: "Letra repetida",
                        text:`Ya ingresaste ${letter.target.textContent} anteriormente`,
                        icon: "warning",
                        confirmButtonText: "Entendido"
                    })
                }
                /* Buscamos si la letra que ingreso el usuario es correcta y no esta ingresada previamente */
                else
                {
                    for (let i = 0; i < hiddenWord.length; i++)
                    {
                        /* Caso que la encontremos la dibujamos y la añadimos a las letras ingresadas */
                        if (letter.target.textContent === hiddenWord[i])
                        {
                            drawCorrectLetter(i);
                            letterFound = true;
                            correct.push(letter.target.textContent);
                        }
                    }
                }
                /* Si ya ingresamos todas las letras correctas de la palabra, ganamos */
                if (correct.join("").length == hiddenWord.length)
                {
                    winner = true;
                }
                /* Si la letra que el usuario ingreso no es correcta */
                if (!letterFound)
                {
                    /* Checkeamos si el usuario erro previamente */
                    let alreadyFail = false
                    for (let i = 0; i < userErrors.length; i++)
                    {
                        if (userErrors[i] === letter.target.textContent)
                        {
                            alreadyFail = true;
                        }
                    }
                    /* Si no erro previamente añadimos el error */
                    if (!alreadyFail)
                    {
                        userErrors.push(letter.target.textContent);
                        drawWrongLetter(userErrors);
                        draw(hangmanIndex);
                        hangmanIndex++;
                        if(hangmanIndex > 9)
                        {
                            loser = true;
                        }
                    }
                    /* Si ya erro previamente lo alertamos */
                    else
                    {
                        Swal.fire({
                            title: "Letra repetida",
                            text:`Ya ingresaste ${letter.target.textContent} anteriormente`,
                            icon: "warning",
                            confirmButtonText: "Entendido"
                        })
                    }
                }
            }
            /* Revisamos si termino el juego (ganamos) */
            if(winner)
            {
                surrenderButton.textContent = "Nuevo juego";
                Swal.fire({
                    title: "¡Felicidades!",
                    text: "Ganaste",
                    icon: "success",
                    confirmButtonText: "Entendido"
                })
            }
            /* Revisamos si ya termino el juego (perdimos) */
            else if (loser)
            {
                gameOver();
            }
        })
})



surrenderButton.addEventListener("click", surrender =>
{
    /* Si el usuario ya se rindio, le damos la opcion de iniciar una nueva partida */
    if(surrender.target.textContent == "Nuevo juego")
    {
        location.reload();
    }
    /* Si el usuario aun no se rindio, confirmamos que ahora si */
    else
    {
        loser = true;
        for(let i = hangmanIndex; i < 10; i++)
        {
            draw(i);
        }
        gameOver();
    }
})



/* En caso de que perdamos */
function gameOver()
{
    /* Escribimos cual era la palabra correcta */
    for(let i = 0; i < hiddenWord.length; i++)
    {
        drawCorrectLetter(i);
    }
    /* Le damos la opcion al usuario de iniciar una nuava partida */
    surrenderButton.textContent = "Nuevo juego";
    /* Notificamos al usuario que perdio */
    Swal.fire({
        title: "Fin del juego",
        text: "Perdiste",
        icon: "error",
        confirmButtonText: "Entendido"
    })
}