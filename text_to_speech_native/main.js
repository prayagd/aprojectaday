let synth = window.speechSynthesis;
let voices = []
let newVoices = []

synth.addEventListener("voiceschanged", function(){
    voices = synth.getVoices()
    console.log(voices)
})


var inputForm = document.querySelector('form');
var inputText = document.querySelector('input');


fetch("http://ip-api.com/json/")
 .then(res => res.json())
 .then(function(res){
     newVoices = voices.filter(function(val){
         return val.lang.slice(val.lang.indexOf("-")+1) == res.countryCode
     })
 })

 inputForm.addEventListener("submit", function(event){
    event.preventDefault();
    let speakThis = new SpeechSynthesisUtterance(inputText.value)
    if(newVoices.length < 0){
        speakThis.voice = voices[11]
    }
    else{
        speakThis.voice = newVoices[0]
    }
    synth.speak(speakThis)
 })

 

