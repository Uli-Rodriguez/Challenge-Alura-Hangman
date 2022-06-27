/* Selecciona una de las posibles palabras como palabra oculta */
let palabras = sessionStorage.getItem("palabras").split(",");
const keyWord = elegirPalabraOculta(palabras);

/* Crear guiones de cada letra */
createKeywordLines(keyWord);

function elegirPalabraOculta(palabras)
{
    return palabras[Math.round(Math.random()*(palabras.length - 1))];
}

function createKeywordLines (keyWord)
{
    /* Obtener caja donde se guarda la palabra oculta */
    const keyWordBox = document.querySelector(".keyword");
    for (let i = 0; i < keyWord.length; i++)
    {
        /* Crear un elemento por cada letra */
        let line = document.createElement("p");
        /* Asignamos clase para estilos y futuros usos */
        line.classList.add("keyLetter");
        /* Añadimos el elemento a la caja contenedora de la palabra oculta */
        keyWordBox.appendChild(line);
    }
}