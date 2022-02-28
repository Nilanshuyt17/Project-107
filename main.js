function Start() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/QuY3oOwxM/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}