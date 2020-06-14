var selectedWord = "";
var wordSelectionDiv = document.getElementById("wordSelection");
var theWordDiv = document.getElementById("theWord");

function selectWord(word) {
    //console.log('you chose ' + word)
    selectedWord = word;
    //hide wordSelectionDiv
    wordSelectionDiv.style.display = "none";
    //show theWordDiv
    theWordDiv.innerHTML = word;
}