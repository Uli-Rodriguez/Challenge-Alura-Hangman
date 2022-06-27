/* Array con las posibles palabras */
let palabras = ["ALURA", "HTML", "AUTO", "PROGRAMA", "VENTANA", "PUERTA", "PERRO", "GATO", "CAJA", "ETIQUETA", "CSS", "LETRAS", "RUEDA", "MOBILE", "AVION"]

/* Subir el array al almacen de la sesion */
sessionStorage.setItem("palabras", palabras.join());