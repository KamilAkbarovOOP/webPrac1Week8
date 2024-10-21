document.addEventListener("DOMContentLoaded", () => {
    const text = document.querySelector('.text');

    //Task 1
    let words = text.textContent.split(' ');
    let newText = words.map(word => {
        if (word.length > 8) {
            return `<span style="background-color: yellow;">${word}</span>`;
        } else {
            return word;
        }
    }).join(' ');
    text.innerHTML = newText;



    //Task 2
    const source = document.createElement('a');
    source.href = "https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-jobinterview-questions-and-how-great-job-candidates-answer-them.html";
    source.textContent = "Source";
    document.body.appendChild(source);



    //Task 3
    let sentences = text.innerHTML.split('. ').join('. <br>');
    text.innerHTML = sentences;



    //Task 4
    let wordCount = words.length;
    const count = document.createElement('p');
    count.textContent = `Words: ${wordCount}`;
    document.body.appendChild(count);



    //Task 5
    let symbols = text.innerHTML.split('?').join('🤔').split('!').join('😮');
    text.innerHTML = symbols;
});
