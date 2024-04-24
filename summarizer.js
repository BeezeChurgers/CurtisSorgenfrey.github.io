// Importing Transformers.js
import { pipeline, env } from "https://cdn.jsdelivr.net/npm/@xenova/transformers@2.6.0";

// Model is from the Hugging Face Hub
env.allowLocalModels = false;

// DOM Elements
const audioLink = document.getElementById("audioLink");
const textOutput = document.getElementById("textOutput");
const status = document.getElementById("status");

// Waiting for model to load
status.textContent = "Loading model...";
// Calling the pipeline() function
const transcriber = await pipeline("automatic-speech-recognition", "Xenova/whisper-tiny.en");
// Update status once model is loaded
status.textContent = "Ready";

// Listener for audio link upload
audioLink.addEventListener("keypress", (e) => {
		if (e.key == "Enter") {
			console.log(audioLink.value);
    	transcribeAudio(audioLink.value);
		}
});

// Transcribing audio

async function transcribeAudio(url) {
		const output = await transcriber(url, { chunk_length_s: 30, stride_length_s: 5 });
		// Output transcription to user
		textOutput.innerHTML = output.text;
}

// Test Url: https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/jfk.wav
// https://afp-9384.calisto.simplecastaudio.com/dbf86dbd-6a9d-4db2-a354-45de08471376/episodes/71ea07c5-ce70-46ee-b72f-0dfcb75ccc77/audio/128/default.mp3

/*
// Image uploader
fileUpload.addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
  
    const reader = new FileReader();
  
    // Set up a callback when the file is loaded
    reader.onload = function (e2) {
      imageContainer.innerHTML = "";
      const image = document.createElement("img");
      image.src = e2.target.result;
      imageContainer.appendChild(image);
      detect(image); // Uncomment this line to run the model
    };
    reader.readAsDataURL(file);
  });

// Running the model
async function detect(img) {
    status.textContent = "Analysing...";
    const output = await detector(img.src, {
      threshold: 0.5,
      percentage: true,
    });
    status.textContent = "";
    console.log("output", output);
    output.forEach(renderBox);
  }

// Render a bounding box and label on the image
function renderBox({ box, label }) {
    const { xmax, xmin, ymax, ymin } = box;
  
    // Generate a random color for the box
    const color = "#" + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, 0);
  
    // Draw the box
    const boxElement = document.createElement("div");
    boxElement.className = "bounding-box";
    Object.assign(boxElement.style, {
      borderColor: color,
      left: 100 * xmin + "%",
      top: 100 * ymin + "%",
      width: 100 * (xmax - xmin) + "%",
      height: 100 * (ymax - ymin) + "%",
    });
  
    // Draw the label
    const labelElement = document.createElement("span");
    labelElement.textContent = label;
    labelElement.className = "bounding-box-label";
    labelElement.style.backgroundColor = color;
  
    boxElement.appendChild(labelElement);
    imageContainer.appendChild(boxElement);
  }
  */