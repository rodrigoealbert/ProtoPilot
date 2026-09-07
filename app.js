import { FilesetResolver, HandLandmarker } from "@mediapipe/tasks-vision";

console.log("app.js loaded successfully");

const cameraAllow = document.querySelector("#cameraAllow");
const cameraStatusH = document.getElementById("cameraStatusH");
let cameraStatus = "Camera Off";
let cameraValue = 0;

function cameraRequested() {
    console.log("Camera request button clicked");
    cameraValue += 1;
    cameraStatus = cameraValue % 2 === 1 ? "Camera On" : "Camera Off";

    if (cameraStatusH) {
        cameraStatusH.textContent = cameraStatus;
    }
}

function cameraRequest() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        console.log("Camera not supported");
        return;
    }

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            const videoElement = document.getElementById("video");

            if (!videoElement) {
                return;
            }

            videoElement.srcObject = stream;
            cameraRequested();
        })
        .catch(function (err) {
            console.error("Error accessing camera:", err);
        });
}

if (cameraAllow) {
    cameraAllow.addEventListener("click", cameraRequest);
}
