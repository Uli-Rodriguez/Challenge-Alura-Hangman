/* Seleccionamos cual sera el tema de la palabra a adivinar */
let topic = selectTopic(sessionStorage.getItem("wordsTopics").split(","));
/* Dentro del tema elejido, seleccionamos una palabra al azar */
var hiddenWord = selectHiddenWord(sessionStorage.getItem(topic).split(","));

console.log(topic);
console.log(hiddenWord);

function selectTopic (wordsTopics)
{
    return wordsTopics[Math.floor(Math.random() * wordsTopics.length)];
}

function selectHiddenWord (wordsArray)
{
    return wordsArray[Math.floor(Math.random() * wordsArray.length)];
}