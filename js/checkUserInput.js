/* Obtenemos los botones del teclado virtual */
const keyBoard = document.querySelectorAll(".teclas");
/* Obtenemos los espacios dodne iran los caracteres de la palabra oculta */
const keyLetter = document.querySelectorAll(".keyLetter");
/* Primero dibujamos la base de la horca */
draw (plano ,varDraw[0][0], varDraw[0][1], varDraw[0][2], varDraw[0][3], varDraw[0][4]);
/* Indice para recorrer el array de las meedidas del dibujo */
let index = 1;
/* Variable que nos indicara si llegamos al final de la palabra oculta */
let winnerWinnerChickenDinner = 0;
/* Variables para saber si ganamos o perdimos */
let loser = false;
let winner = false;

/* Checkear si el usuario se quiere rendir */
const desistir = document.querySelector("#GGWPffal15");
desistir.addEventListener("click", surrender =>
{
    if (!winner && !loser)
    {
        /* Revelar la palabra oculta */
        for (let i = 0; i < keyWord.length; i++)
        {
            keyLetter.item(i).textContent = keyWord[i];
        }
        /* Completar el ahorcado */
        for (let i = index; i < varDraw.length; i++)
        {
            draw (plano ,varDraw[i][0], varDraw[i][1], varDraw[i][2], varDraw[i][3], varDraw[i][4]);
        }
        loser = true;
        const showResult = document.querySelector("#showResult");
        showResult.classList.add("loser");
        showResult.textContent = "Fin del juego";
    }
})

/* A todos los botones del teclado virtual */
keyBoard.forEach(button =>
{
    /* Añadimos el evento click */
    button.addEventListener("click", buttonClick =>
    {
        /* Obtenemos los errores cometidos por el usuario */
        const failLetter = document.querySelectorAll(".failLetter");
        
        /* Si aun no acaba el juego */
        if (!loser && !winner)
        {
            /* Buscamos si la el boton presionado coincide con alguna letra de la palabra oculta, de ser asi la añadimos al espacio correspondiente (se lo mostramos al usuario) */
            let keyLetterFound = false;
            for(let i = 0; i < keyWord.length; i++)
            {
                if (buttonClick.target.textContent == keyWord[i])
                {
                    keyLetter.item(i).textContent = buttonClick.target.textContent;
                    winnerWinnerChickenDinner++;
                    keyLetterFound = true;
                }
            }
            /* Si llegamos al final de la palabra oculta, ganamos y terminamos el juego */
            if (winnerWinnerChickenDinner == keyWord.length)
            {
                winner = true;
            }
            /* Verificamos si el usuario acerto o si la tecla presionada ya fue guardada como error previamente */
            let userSucced = alreadyFail(failLetter, buttonClick.target.textContent) || keyLetterFound;
            if (!userSucced)
            {
                /* Añadimos la letra del usuario a la lista de errores y dibujamos una parte del ahorcado */
                addFailedLetter(buttonClick.target.textContent);
                draw (plano ,varDraw[index][0], varDraw[index][1], varDraw[index][2], varDraw[index][3], varDraw[index][4]);
                index++;
                /* Si ya dibujamos todas las partes del ahorcado, perdimos y terminamos el juego */
                if (index == varDraw.length)
                {
                    loser = true;
                }
            }
        }
        /* Si perdimos */
        if (loser)
        {
            /* Revelar la palabra oculta */
            for (let i = 0; i < keyWord.length; i++)
            {
                keyLetter.item(i).textContent = keyWord[i];
            }
            const showResult = document.querySelector("#showResult");
            showResult.classList.add("loser");
            showResult.textContent = "Fin del juego";
        }
        /* Si ganamos */
        else if (winner)
        {
            const showResult = document.querySelector("#showResult");
            showResult.classList.add("winner");
            showResult.textContent = "Ganaste, ¡Felicidades!"
        }
    })
})

function alreadyFail (failLetter, userInput)
{
    /* Revisamos si el usuario tiene errores previos */
    if (failLetter.length > 0)
    {
        /* Si la letra del usuario coincide con algun error previo, encontramos un error */
        for (let i = 0; i < failLetter.length; i++)
        {
            if (userInput == failLetter.item(i).textContent)
            {
                return true;
            }
        }
    }
    /* Si no encontramos algun error previo */
    return false
}

function addFailedLetter (letter)
{
    /* Obtenemos el contenedor HTML de los errores del usuario */
    const failLetterBox = document.querySelector(".failLetterBox");
    /* Creamos un contenedor HTML para mostrar el error y almacenarlo */
    const failed = document.createElement("p");
    /* Añadimos clases y contenido al contenedor creado */
    failed.classList.add("failLetter");
    failed.textContent = letter;
    /* Agregamos el contenedor creado al contenedor de errores */
    failLetterBox.appendChild(failed);
}