/* Seleccionamos cual sera el tema de la palabra a adivinar */
let topic = selectTopic(sessionStorage.getItem("wordsTopics").split(","));
/* Dentro del tema elejido, seleccionamos una palabra al azar */
var hiddenWord = selectHiddenWord(sessionStorage.getItem(topic).split(","));

function selectTopic (wordsTopics)
{
    return wordsTopics[Math.floor(Math.random() * wordsTopics.length)];
}

function selectHiddenWord (wordsArray)
{
    return wordsArray[Math.floor(Math.random() * wordsArray.length)];
}