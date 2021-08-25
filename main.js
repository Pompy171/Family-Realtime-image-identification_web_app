function preload(){

}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/txdD5l_yO/model.json",modelloaded);
}

function modelloaded(){
    console.log("Model Loaded");
}

function draw(){
    image(video,0,0,300,300);
    classifier.classify(video,got_results);
}

function got_results (error,results) {

    if(error==true){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("accuracy_object_name").innerHTML=results[0].confidence.toFixed(2);
    }
}
