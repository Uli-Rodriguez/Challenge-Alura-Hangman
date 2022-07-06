/* Usaremos este script para almacenar datos que se comparten en todas las paginas y que necesitamos desde el incio del programa */

/* Definimos las palabras a adivinar */
const words = 
[
    ["AUTO", "AVION", "CAMION", "LANCHA", "TREN"], /* Vehiculos */
    ["PAN", "PASTA","CARNE", "POLLO", "PESCADO"], /* Comida */
    ["VACA", "PEZ", "GATO", "PERRO", "OVEJA"], /* Animales */
    ["ALURA", "ORACLE", "PEPSI", "FORD", "TOYOTA", "APPLE"], /* Empresas */
    ["BRASIL", "CHILE", "ESPAÑA", "CHAD", "ALEMANIA"], /* Paises */
    ["MADRID", "BERLIN", "VARSOVIA", "LIMA", "BOGOTA"], /* Capitales */
    ["CATALINA", "SANTIAGO", "JOAQUIN", "JAVIER", "SOFIA"], /* Nombres */
]

/* Definimos los temas de las palabras */

/* variable que usaremos para guardar el tema de la palabra y la palabra en si */
var topic = "";
var hiddenWord = "";

console.log(sessionStorage.getItem("VEHICULOS") === null);

/* Cargamos las palabras al navegador */
const wordsTopics = ["VEHICULOS", "COMIDA", "ANIMALES", "EMPRESAS", "PAISES", "CAPITALES", "NOMBRES"]
sessionStorage.setItem("wordsTopics", wordsTopics.join());
for (let i = 0; i < wordsTopics.length; i++)
{
    if (sessionStorage.getItem(wordsTopics[i]) === null)
    {
        sessionStorage.setItem(wordsTopics[i], words[i].join());
    }
}


for (let i = 0; i < wordsTopics.length; i++)
{
    console.log(sessionStorage.getItem(wordsTopics[i]).split(","));
}