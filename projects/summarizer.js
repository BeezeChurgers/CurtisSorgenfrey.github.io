// Importing Transformers.js
import { pipeline, env } from "https://cdn.jsdelivr.net/npm/@xenova/transformers@2.6.0";

// Model is from the Hugging Face Hub
env.allowLocalModels = false;

// DOM Elements
const link = document.getElementById("link");
const button = document.getElementById("summarize");
const textOutput = document.getElementById("textOutput");
const status = document.getElementById("status");

// Waiting for model to load
status.textContent = "Loading model...";
// Calling the pipeline() function
const generator = await pipeline('summarization', 'Xenova/distilbart-cnn-6-6');
// Update status once model is loaded
status.textContent = "Ready";

/*
const text = 'The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, ' +
  'and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side. ' +
  'During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest ' +
  'man-made structure in the world, a title it held for 41 years until the Chrysler Building in New ' +
  'York City was finished in 1930. It was the first structure to reach a height of 300 metres. Due to ' +
  'the addition of a broadcasting aerial at the top of the tower in 1957, it is now taller than the ' +
  'Chrysler Building by 5.2 metres (17 ft). Excluding transmitters, the Eiffel Tower is the second ' +
  'tallest free-standing structure in France after the Millau Viaduct.';
const output = await generator(text, {
  max_new_tokens: 100,
});

textOutput.innerHTML = output[0].summary_text;
*/

// Listener for link input
link.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    status.textContent = "Analyzing...";
    console.log(link.value);
    summarizeTranscript(link.value);
  }
});

button.addEventListener("click", () => {
  status.textContent = "Analyzing...";
  console.log(link.value);
  summarizeTranscript(link.value);
});


// Summarize transcript
async function summarizeTranscript(text) {
  const output = await generator(text, {
    max_new_tokens: 100,
  });
  status.textContent = "Done.";
  // Output transcription to user
  textOutput.innerHTML = output[0].summary_text;
}

/*
sample input:
The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side. During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest ' +man-made structure in the world, a title it held for 41 years until the Chrysler Building in New York City was finished in 1930. It was the first structure to reach a height of 300 metres. Due to the addition of a broadcasting aerial at the top of the tower in 1957, it is now taller than the Chrysler Building by 5.2 metres (17 ft). Excluding transmitters, the Eiffel Tower is the second tallest free-standing structure in France after the Millau Viaduct.
*/