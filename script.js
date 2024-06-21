$(document).ready(function () {

  // Recent Projects Carousel --------------------------------------------------
  const recentProjects = [{
    id: 1,
    name: "ecommercesite",
    text: "eCommerce site crafted with HTML, CSS, and JavaScript seamlessly blending aesthetic design with intuitive user experience, offering a diverse range of products and streamlined checkout processes. Through responsive design and interactive features, it caters to modern shoppers, providing a secure and convenient platform for online purchases.",
    link: "projects/ecommercesite/ecommercepage.html"
  },
  {
    id: 2,
    name: "calculator",
    text: "Calculator equipped with fully functional clickable buttons. Dark mode uses \"prefers-color-scheme\" CSS method.",
    link: "projects/calculator.html"
  },
  {
    id: 3,
    name: "tic-tac-toe",
    text: "Tic Tac Toe game with both pvp and pve modes. PvE offers intelligent Neural Network computer player, learning as you play with the power of Brain.js.",
    link: "projects/tictactoe.html"
  },
  {
    id: 4,
    name: "to-do list",
    text: "To Do List using iseditable elements.",
    link: "projects/todolist.html"
  },
  {
    id: 5,
    name: "Tetris",
    text: "Tetris uses flexbox structure, testing class lists to move tetrominoes. The game uses arrays to itterate colors, and intervals to increase play speed.",
    link: "projects/tetris.html"
  },
  {
    id: 6,
    name: "Countdown",
    text: "Simple countdown app.",
    link: "projects/countdown.html"
  },
  {
    id: 7,
    name: "Audio Recorder",
    text: "Audio recording app using blob and file objects, with automatic download and title.",
    link: "projects/audiorecorder.html"
  },
  {
    id: 8,
    name: "Snake Game",
    text: "Snake game adapted from Codepen, utilizing jQuery with implamented touch controls and specialized css styles using jQuery selectors.",
    link: "projects/snakegame.html"
  }
    /*,
    {
      id: 9,
      name: "Summarizer",
      text: "Summarize your podcast or video with the power of Transformers.js.",
      link: "projects/summarizer.html"
    }
    */
  ]
  // Select Items
  const img = document.getElementById("recentProjectsImg");
  const description = document.getElementById("recentProjectsDescription");
  const link = document.getElementById("projectLink");
  const prevBtns = document.getElementsByClassName('prevBtn');
  const prevBtnRP = prevBtns[0];
  const nextBtns = document.getElementsByClassName('nextBtn');
  const nextBtnRP = nextBtns[0];
  const randomBtn = document.querySelector('.randomBtn');
  // Set starting item
  let currentItem = 0;
  // Load initial item
  window.addEventListener("DOMContentLoaded", function () {
    showProject();
  });
  // Show recent project based on item
  function showProject() {
    const item = recentProjects[currentItem];
    img.src = item.link;
    description.textContent = item.text;
    link.href = item.link;
    clearInterval(pInterval);
    pInterval = setInterval(loopProjects, 10000);
  }
  // Show next project
  nextBtnRP.addEventListener('click', function () {
    currentItem++;
    if (currentItem > recentProjects.length - 1) {
      currentItem = 0;
    }
    showProject();
  });
  // Show prev project
  prevBtnRP.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = recentProjects.length - 1;
    }
    showProject();
  });
  // Show random project
  randomBtn.addEventListener("click", function () {
    let rand = Math.floor(Math.random() * 4);
    while (rand === currentItem) {
      rand = Math.floor(Math.random() * 4);
    }
    currentItem = rand;
    showProject();
  });
  // Loop through projects every 10 seconds
  function loopProjects() {
    currentItem++;
    if (currentItem > recentProjects.length - 1) {
      currentItem = 0;
    }
    showProject();
  }
  let pInterval = setInterval(loopProjects, 10000);


  // Qualifications Carousel --------------------------------------------------
  const qualifications = [{
    id: 1,
    name: "HTML",
    code: "codeExamples/htmlExample.html",
    text: "Skilled in HTML coding, adept at crafting well-structured and semantic markup, and well versed in best practices for accessibility and SEO optimization. With an eye for detail and a commitment to clean, maintainable code, aiming to create engaging and user-friendly web experiences across diverse platforms."
  },
  {
    id: 2,
    name: "CSS",
    code: "codeExamples/cssExample.html",
    text: "Skilled in CSS styling, excelling at transforming HTML elements into visually appealing and responsive designs while ensuring consistency and embracing modern design trends. From basic styling to complex animations, the goal is to create immersive and cohesive visual experiences that captivate and delight users."
  },
  {
    id: 3,
    name: "JavaScript",
    code: "codeExamples/jsExample.html",
    text: "Skilled in JavaScript development, with expertise in core concepts, modern frameworks, and dynamic interactivity. From manipulating the DOM to tackling complex logic, and delivering clean, modular, and maintainable code for robust web applications that meet user requirements and business objectives."
  },
  {
    id: 4,
    name: "Python",
    code: "codeExamples/pythonExample.html",
    text: "Skilled in utilizing Python for a wide range of applications, from data analysis and web development to automation and scripting. Experienced in leveraging Python's extensive libraries and frameworks to solve complex problems and deliver robust solutions."
  },
  {
    id: 5,
    name: "jQuery",
    code: "codeExamples/cssExample.html",
    text: "Proficient in jQuery, possessing a deep understanding of its syntax, selectors, and methods, enabling efficient manipulation of the DOM, handling events, and implementing dynamic interactions in web applications."
  },
    /*
    {
      id: 5,
      name: "git",
      code: "",
      text: ""
    },
    {
      id: 6,
      name: "TypeScript",
      code: "",
      text: ""
    },
    {
      id: 7,
      name: "Node.js",
      code: "",
      text: ""
    },
    {
      id: 8,
      name: "React",
      code: "",
      text: ""
    },
    */
  ]
  // Select Items
  const title = document.getElementById("qualificationsTitle");
  const qDescription = document.getElementById("qualificationsDescription");
  const code = document.getElementById("qualificationsCode");
  const prevBtnQ = prevBtns[1];
  const nextBtnQ = nextBtns[1];
  // Set starting item
  let currentItemQ = 0;
  // Load initial item
  window.addEventListener("DOMContentLoaded", function () {
    showQualifications();
  });
  // Show recent project based on item
  function showQualifications() {
    const item = qualifications[currentItemQ];
    title.innerText = item.name;
    code.src = item.code;
    qDescription.textContent = item.text;
    clearInterval(qInterval);
    qInterval = setInterval(loopQualifications, 10000);
  }
  // Show next project
  nextBtnQ.addEventListener("click", function () {
    currentItemQ++;
    if (currentItemQ > qualifications.length - 1) {
      currentItemQ = 0;
    }
    showQualifications();
  });
  // Show prev project
  prevBtnQ.addEventListener("click", function () {
    currentItemQ--;
    if (currentItemQ < 0) {
      currentItemQ = qualifications.length - 1;
    }
    showQualifications();
  });
  // Loop through qualifications every 10 seconds
  function loopQualifications() {
    currentItemQ++;
    if (currentItemQ > qualifications.length - 1) {
      currentItemQ = 0;
    }
    showQualifications();
  }
  let qInterval = setInterval(loopQualifications, 10000);

});
