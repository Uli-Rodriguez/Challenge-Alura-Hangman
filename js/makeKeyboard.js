crearTeclado();

function crearTeclado ()
{
    // Obtener div contenedor del teclado
    const contenedorTeclado = document.querySelector(".teclado");

    // Letras del teclado
    const letrasTeclado = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

    // Asignar teclas al teclado
    for (let i = 0; i < letrasTeclado.length; i++)
    {
        // Crear contenedor de la tecla
        const contenedorTecla = document.createElement("li");
        contenedorTeclado.appendChild(contenedorTecla);

        // Crear boton para cada tecla
        const botonTecla = document.createElement("button");
        botonTecla.textContent = letrasTeclado[i];
        botonTecla.classList.add("teclas");
        contenedorTecla.appendChild(botonTecla);
    }
}