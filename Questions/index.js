function toggleAnswer(answer) {
    var answerElement = document.querySelector('.' + answer + '-answer');
    answerElement.style.display = (answerElement.style.display === 'none') ? 'block' : 'none';
}
