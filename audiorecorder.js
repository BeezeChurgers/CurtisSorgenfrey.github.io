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
        // Getting file name information
        let clipName = "";
        form.onsubmit = (e2) => {
          e2.preventDefault();
          const todaysDate = new Date();
          let year = todaysDate.getFullYear();
          let month = (todaysDate.getMonth() + 1).toString().padStart(2, "0");
          let day = todaysDate.getDate().toString().padStart(2, "0");
          const bibleBooks = [
            "Genesis",
            "Exodus",
            "Leviticus",
            "Numbers",
            "Deuteronomy",
            "Joshua",
            "Judges",
            "Ruth",
            "1 Samuel",
            "2 Samuel",
            "1 Kings",
            "2 Kings",
            "1 Chronicles",
            "2 Chronicles",
            "Ezra",
            "Nehemiah",
            "Esther",
            "Job",
            "Psalms",
            "Proverbs",
            "Ecclesiastes",
            "Song of Solomon",
            "Isaiah",
            "Jeremiah",
            "Lamentations",
            "Ezekiel",
            "Daniel",
            "Hosea",
            "Joel",
            "Amos",
            "Obadiah",
            "Jonah",
            "Micah",
            "Nahum",
            "Habakkuk",
            "Zephaniah",
            "Haggai",
            "Zechariah",
            "Malachi",
            "Matthew",
            "Mark",
            "Luke",
            "John",
            "Acts",
            "Romans",
            "1 Corinthians",
            "2 Corinthians",
            "Galatians",
            "Ephesians",
            "Philippians",
            "Colossians",
            "1 Thessalonians",
            "2 Thessalonians",
            "1 Timothy",
            "2 Timothy",
            "Titus",
            "Philemon",
            "Hebrews",
            "James",
            "1 Peter",
            "2 Peter",
            "1 John",
            "2 John",
            "3 John",
            "Jude",
            "Revelation"
          ];
          let book = form.elements[1].value;
          let bookNum = (bibleBooks.indexOf(book) + 1).toString().padStart(2, "0");
          // Make book just 3 uppercase characters no spaces
          book = book.replace(/\s/g, "");
          book = book.substring(0, 3);
          book = book.toUpperCase();
          let chapter = (form.elements[2].value).toString().padStart(3, "0");
          let verse = (form.elements[3].value).toString().padStart(3, "0");
          let preacher = form.elements[0].value;
          clipName = `${year}${month}${day}-${bookNum}-${book}-${chapter}-${verse}-${preacher}`;
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
          const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
          const file = new File([blob], `${clipName}`, {
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
/*
// Prevents user from leaving
window.onbeforeunload = confirmExit;
    function confirmExit() {
        return "You have attempted to leave this page. Are you sure?";
    }
*/