prediction1="";
prediction2="";

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:100
});

camera=document.getElementById("camera");
Webcam.attach("#camera");

function clickImage(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="imgResult" src="'+data_uri+'">';
    });
}

console.log("ML5 Version: "+ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json",modelLoaded);

function modelLoaded(){
    console.log("Model loaded.");
}

function speak(){
    speechSynth=window.speechSynthesis;;
    speech1="I'm guessing you're"+prediction1;
    speech2="Or maybe you're"+prediction2;
    speakThis=new SpeechSynthesisUtterance(speech1+speech2);
    speechSynth.speak(speakThis);
}