let btn = document.querySelector('.btn');
let input = document.querySelector('#input')
let select = document.querySelector('#select');
let voices = [];



// btn.onclick = function(){
//     let input = document.querySelector('#input');

//     let speech = new SpeechSynthesisUtterance();
//     speech.volume = 1;
//     speech.rate = 0.9;
//     speech.pitch = 1;

//     speech.text = input.value;

//     window.speechSynthesis.speak(speech);
// }

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice, i) => (select.options[i] = new Option(voice.name, i)))
};


btn.onclick = () => {
    let speech =  new SpeechSynthesisUtterance();
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    speech.text = input.value;

    window.speechSynthesis.speak(speech);

}