prediction_1 = "";
prediction_2 = "";
Webcam.set({ width:350, height:300, image_format : 'png', png_quality:90 }); 
camera = document.getElementById("camera"); 
Webcam.attach('#camera'); 

function clickImage() { Webcam.snap(function(data_uri) 
    { document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'; }); } 

    console.log('ml5 version:', ml5.version); 
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json',modelLoaded); 

function modelLoaded() { console.log('Model Loaded!'); } 

function getEmoji(){
    clickedImg=document.getElementById("captured_image");
    classifier.classify(clickedImg,getResult);
}

function getResult(error,results){
    if (error){
        console.error(error);
    }
    else {console.log(results)
    prediction_1=results[0].label;
    prediction_2=results[1].label;
    speak();
    if (prediction_1=="happy"){
        document.getElementById("mood1").innerHTML="&#128522;";
    }
    if (prediction_1=="sad"){
        document.getElementById("mood1").innerHTML="&#128532;";
    }
    if (prediction_1=="angry"){
        document.getElementById("mood1").innerHTML="&#128545;";
    }
    if (prediction_2=="happy"){
        document.getElementById("mood2").innerHTML="&#128522;";
    }
    if (prediction_2=="sad"){
        document.getElementById("mood2").innerHTML="&#128532;";
    }
    if (prediction_2=="angry"){
        document.getElementById("mood2").innerHTML="&#128545;";
    }
}
}

function speak(){ 
    var synth = window.speechSynthesis; speak_data_1 = "I think you're feeling " + prediction_1; 
    speak_data_2 = "Or are you " + prediction_2; 
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2); 
    synth.speak(utterThis); }