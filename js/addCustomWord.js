/* Obtenemos el boton para guardar la palabra ingresada por el usuario */
const saveUserWord = document.querySelector("#saveAndStart");

saveUserWord.addEventListener("click", saveButton =>
{
    /* Obtenemos la palabra ingresada por el usuario */
    const userInput = document.querySelector(".inputWord").value;
    /* Obtenemos el topic elegido */
    const selectedTopic = document.querySelector("#wordTopic").value;
    /* Validamos que solo sean letras y no numeros o caracteres especiales */
    const validateText = /[^A-Za-zÑñ]/g;
    /* Validamos el texto ingresado por le usuario (solo letras sin acentos) */
    if(validateText.test(userInput))
    {
        Swal.fire({
            title: "Caracter no valido",
            text: "Solo se permiten letras sin acentos",
            icon: "warning",
            confirmButtonText: "Entendido"
        })
    }
    /* Si el usuario intenta enviar una palabra vacia */
    else if(userInput == "")
    {
        Swal.fire({
            title: "No se encontro la palabra",
            text: "Por favor, ingrese la palabra que desea añadir",
            icon: "warning",
            confirmButtonText: "Entendido"
        })
    }
    /* Si paso la validacion */
    else
    {
        /* Nos fijamos que el usuario haya elegido un tema */
        if(selectedTopic == "")
        {
            Swal.fire({
                title: "Ningun tema fue seleccionado",
                text: "Seleccione algun tema para su palabra",
                icon: "warning",
                confirmButtonText: "Entendido"
            })
        }
        if (userInput.length > 8)
        {
            Swal.fire({
                title: "Palabra demasiado larga",
                text: "Solo se permiten palabras de maximo 8 letras",
                icon: "warning",
                confirmButtonText: "Entendido"
            })
        }
        else
        {
            /* Obtenemos las palabras guardadas y nos fijamos si existe el tema personalizado */
            var createPersonalizado = false;
            var wordsTopics = sessionStorage.getItem("wordsTopics").split(",");
            if(wordsTopics.length < 8)
            {
                createPersonalizado = true;
            }
            /* Nos fijamos que el usuario no ingrese palabras repetidas */
            let alreadyLoaded = false;
            for (let i = 0; i < wordsTopics.length; i++)
            {
                let words = sessionStorage.getItem(wordsTopics[i]).split(",");
                for(let j = 0; j < words.length; j++)
                {
                    if (words[j] == userInput.toUpperCase())
                    {
                        alreadyLoaded = true;
                    }
                }
            }
            if(alreadyLoaded)
            {
                Swal.fire({
                    title: "Palabra repetida",
                    text: "La palabra que intenta agregar ya fue añadida anteriormente",
                    icon: "warning",
                    confirmButtonText: "Entendido"
                })
            }
            else
            {
                if (createPersonalizado && selectedTopic == "PERSONALIZADO")
                {
                    /* Creamos el tema personalizado si es necesario y guardamos la palabra del usuario */
                    wordsTopics.push("PERSONALIZADO");
                    sessionStorage.setItem("PERSONALIZADO", userInput.toUpperCase());
                    sessionStorage.setItem("wordsTopics", wordsTopics.join());
                    window.location.href = "newGame.html";
                }
                else
                {
                    /* Añadimos la palabra del usuario en base a su tema */
                    let words = sessionStorage.getItem(wordsTopics[wordsTopics.indexOf(selectedTopic)]).split(",");
                    words.push(userInput.toUpperCase());
                    /* Guardamos la palabra en el navegador */
                    sessionStorage.setItem(wordsTopics[wordsTopics.indexOf(selectedTopic)], words.join());
                    window.location.href = "newGame.html";
                }
            }
        }
    }
})