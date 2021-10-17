var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/oldenglish.json"

function getTranslatedURL(input) {
    return serverURL + "?" +"text=" +input
}


function errorHandler(error) {
    console.log("error occured" , error);
    alert("Something is wrong with the server! Try after some time.")
}
function clickHandler() {
    let inputText = txtInput.value;

    // calling the function
    fetch(getTranslatedURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;

        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)