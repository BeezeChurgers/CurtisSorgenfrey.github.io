// Declaring variables from HTML
const record = document.querySelector(".record");
const soundClips = document.querySelector(".soundClips");
const form = document.querySelector("form");

// Whole program is wrapped in a test for microphone permissions
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  console.log("getUserMedia supported.");
  navigator.mediaDevices.getUserMedia(
    // constraints - only audio needed for this app
    {
			audio: true,
		},
	)

    // Success callback
    .then((stream) => {
			// Initializing media recorder
			const mediaRecorder = new MediaRecorder(stream);

			// Start recording on click
			record.onclick = () => {
				// Check if recording
				if (mediaRecorder.state == "recording") {
					mediaRecorder.stop();
  				console.log(mediaRecorder.state);
					console.log("recorder stopped");
					record.style.background = "white";
					record.style.color = "black";
				} else {
					mediaRecorder.start();
					console.log(mediaRecorder.state);
					console.log("recorder started");
					record.style.background = "red";
					record.style.color = "white";
				}
			};
			
			// Initializing data collector and listening for data
			let chunks = [];

			mediaRecorder.ondataavailable = (e) => {
				chunks.push(e.data);
			};
			
			// Grabbing and using the blob
			mediaRecorder.onstop = (e) => {
				form.style.display = "block";
				// Getting name information
				let clipName = "";
				form.onsubmit = (e2) => {
					e2.preventDefault();
					const todaysDate = new Date();
					if (todaysDate.getMonth() + 1 < 10) {
						if (todaysDate.getDate() < 10) {
							clipName = `${todaysDate.getFullYear()}0${todaysDate.getMonth()+1}0${todaysDate.getDate()}-01-${form.elements[1].value}-${form.elements[2].value}-${form.elements[3].value}-${form.elements[0].value}`;
						} else {
							clipName = `${todaysDate.getFullYear()}0${todaysDate.getMonth()+1}${todaysDate.getDate()}-01-${form.elements[1].value}-${form.elements[2].value}-${form.elements[3].value}-${form.elements[0].value}`;
						}
					} else {
						if (todaysDate.getDate() < 10) {
							clipName = `${todaysDate.getFullYear()}${todaysDate.getMonth()+1}0${todaysDate.getDate()}-01-${form.elements[1].value}-${form.elements[2].value}-${form.elements[3].value}-${form.elements[0].value}`;
						} else {
							clipName = `${todaysDate.getFullYear()}${todaysDate.getMonth()+1}${todaysDate.getDate()}-01-${form.elements[1].value}-${form.elements[2].value}-${form.elements[3].value}-${form.elements[0].value}`;
						}
					}
					// Creating elements to display clip
					const clipContainer = document.createElement("article");
					const clipLabel = document.createElement("p");
					const audio = document.createElement("audio");
					const deleteButton = document.createElement("button");
					// Setting attributes of elements
					clipContainer.classList.add("clip");
					audio.setAttribute("controls", "");
					deleteButton.innerHTML = "Delete";
					clipLabel.innerHTML = clipName;
					// Appending elements to article in HTML body
					clipContainer.appendChild(audio);
					clipContainer.appendChild(clipLabel);
					clipContainer.appendChild(deleteButton);
					soundClips.appendChild(clipContainer);
					// Making mp3 file
					const blob = new Blob(chunks, { type: "audio/mpeg; codecs=mp3" });
					const file = new File([blob], `${clipName}.mp3`, {
							type: blob.type,
					});
					chunks = [];
					const audioURL = window.URL.createObjectURL(file);
					audio.src = audioURL;
					// Downloading file automatically
					function download() {
						const link = document.createElement('a');
						const url = URL.createObjectURL(file);

						link.href = url;
						link.download = file.name;
						document.body.appendChild(link);
						link.click();

						document.body.removeChild(link);
						window.URL.revokeObjectURL(url);
					}
					download();
					// Allowing file to be deleted
					deleteButton.onclick = (e) => {
						let evtTgt = e.target;
						evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
					};
					// Making title form disappear
					form.style.display = "none";
				};
			};
		})

    // Error callback
    .catch((err) => {
      console.error(`The following getUserMedia error occurred: ${err}`);
    });
} else {
  console.log("getUserMedia not supported on your browser!");
}