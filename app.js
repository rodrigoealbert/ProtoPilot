import { FilesetResolver, HandLandmarker } from "@mediapipe/tasks-vision";

console.log("app.js loaded successfully");

const cameraAllow = document.querySelector("#cameraAllow");

const cameraStatusH = document.getElementById("cameraStatusH");
let cameraStatus = "Camera Off";
let cameraValue = 0;

function cameraRequested() {
    console.log("Camera request button clicked")
    cameraValue = cameraValue+1;
    console.log("Camera value: " + cameraValue);

    if (cameraValue % 2 === 1) { 
        cameraStatus = "Camera On";
    }
     else {
        cameraStatus = "Camera Off";
    }
        cameraStatusH.textContent = cameraStatus;
        console.log("Camera status: " + cameraStatus);
}
function cameraRequest() {
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            var videoElement = document.getElementById('video');
}           if(videoElement) {
    videoElement.srcObject = stream;
    videoElement.play();
}   
}).catch(function(err) {
    console.log("Error accessing camera: " + err);
}
else {
    console.log("Camera not supported"); 
}

cameraAllow.addEventListener("click", cameraRequest);

