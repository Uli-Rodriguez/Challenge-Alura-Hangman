/* Obtener el boton de guardar la palabra del usuario y empezar el juego */
const saveWordButton = document.querySelector("#saveAndStart");
saveWordButton.addEventListener("click", () =>
{
    /* Obtener la palabra que quiere añadir el usuario */
    const inputWord = document.querySelector(".inputWord");
    const userInput = inputWord.value;
    /* Checkear que el usuario haya escrito bien su palabra */
    const checkInputMayus = /[^A-Z\u00D1]/g;
    if (!checkInputMayus.test(userInput))
    {
        /* Checkear si la palabra fue añadida anteriormente */
        let alreadyLoaded = checkDuplicateWords(userInput);
        if (!alreadyLoaded)
        {
            /* Añadir palabra del usuario a las palabras guardadas */
            let palabras = sessionStorage.getItem("palabras").split(",");
            palabras.push(userInput);
            sessionStorage.setItem("palabras", palabras.join());
            /* Comenzar el juego */
            window.location.href = "newGame.html";
        }
        /* Notificar que la palabra ya existe */
        else
        {
            alert("La palabra que intenta adicionar ya existe");
        }
    }
    /* Indicar como debe estar escrita la palabra */
    else
    {
        alert("La palabra que desea añadir debe contener maximo 8 letras (sin caracteres especiales) y estar en mayusculas")
    }
})

function checkDuplicateWords (userInput)
{
    /* Obtenemos las palabras guardadas */
    let palabras = sessionStorage.getItem("palabras").split(",");
    /* Checkeamos si la palabra del usuario esta duplicada */
    for (let i = 0; i < palabras.length; i++)
    {
        if (palabras[i] == userInput)
        {
            return true;
        }
    }
    return false;
}