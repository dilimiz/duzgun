function duzgun() {
    var inputText = document.getElementById('input').value;
    wordList = inputText.split(" ");
    var outputText = '';
    for(var i=0;i<wordList.length;i++) {
        outputText += wordList[i] + '\n';
    }
    document.getElementById('output').value = outputText;
}