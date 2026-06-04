let step = 0;

function nextStep() {
  const question = document.getElementById("question");
  const image = document.getElementById("questionImage");

  if (step === 0) {
    question.textContent = "Are you sure?";
    image.src = "secondCat.jpeg"
    step++;
  } else {
    document.getElementById("questionBox").classList.add("hidden");
    document.getElementById("startBox").classList.remove("hidden");
  }
}

function wrongPerson() {
  document.getElementById("questionBox").classList.add("hidden");
  document.getElementById("wrongPersonBox").classList.remove("hidden");
}

function goBack() {
  step = 0;

  document.getElementById("question").textContent =
    "This corner of the internet is reserved for a special person. If you're not Nessie then go away.";

    document.getElementById('questionImage').src = "firstCat.jpeg"

  document.getElementById("wrongPersonBox").classList.add("hidden");
  document.getElementById("questionBox").classList.remove("hidden");
}

function startExperience() {
    document.getElementById("startBox").classList.add("hidden");
    document.getElementById("birthdayAnimation").classList.remove("hidden");
  
    runBirthdayAnimation();
  }
  
  async function runBirthdayAnimation() {
    const wordElement = document.getElementById("birthdayWord");
  
    startFallingBehind(12000, 80);
  
    await wait(2200);
    await showWord("HAPPY", false);
  
    await showWord("BIRTHDAY", false);
    await showWord("TO", false);
    await showWord("YOU", true);
  
    await wait(900);
  
    startHeartRainFront(3000, 60);
  
    await wait(3000);
    wordElement.classList.add("coveredGone");
  
    // wait until hearts leave the screen
    await wait(4500);
  
    document.getElementById("fallingBehind").innerHTML = "";
    document.getElementById("fallingFront").innerHTML = "";
    wordElement.className = "";
    wordElement.textContent = "";
  
    document.getElementById("birthdayAnimation").classList.add("softLighten");
  
    await wait(1200);
  
    playNanaNessie();
  }

  async function playNanaNessie() {
    const scene = document.getElementById("nanaScene");
    const na1 = document.getElementById("na1");
    const na2 = document.getElementById("na2");
    const nessie = document.getElementById("nessieText");
  
    scene.classList.remove("hidden");
  
    na1.classList.add("driveIn1");
bumpScreen();

await wait(700);
na2.classList.add("driveIn2");
bumpScreen();

await wait(700);
nessie.classList.add("driveIn3");
bumpScreen();

await wait(1300);
  
    document.getElementById("birthdayAnimation").classList.add("warmLight");
    scene.classList.add("nanaMoveUp");
  
    await wait(900);
  
    document.getElementById("photoBookScene").classList.remove("hidden");
  }

  const memories = [
    {
      type: "image",
      src: "army.jpeg",
      caption: "Those army men..."
    },
  
    {
      type: "video",
      src: "cat_hand.mp4",
      caption: "Always petting cats tsk tsk tsk"
    },
  
    {
      type: "image",
      src: "group_pic_one.jpeg",
      caption: "First ever picture we took all together."
    },

    {
        type: "image",
        src: "thumbs_up_whatsapp.jpeg",
        caption: "Thumbs up."
    },

    {
        type: "image",
        src: "bandung_thumbs_up.jpeg",
        caption: "We look so done."
    },

    {
        type: "video",
        src: "swim.mp4",
        caption: "Swim session"
    },

    {
        type: "video",
        src: "insta.mp4",
        caption: "Did i mog."
    },

    {
        type: "image",
        src: "bereal_peace.jpeg",
        caption: "PEACE"
    },

    {
        type: "image",
        src: "bereal_peace_cuteaf.jpeg",
        caption: "HOW ARE YOU THIS CUTE"
    },

    {
        type: "image",
        src: "ants.jpeg",
        caption: "What is so fascinating about ants?"
    },

    {
        type: "video",
        src: "quran.mp4",
        caption: "This is what I was talking about"
    },

    {
        type: "image",
        src: "bereal_last.jpeg",
        caption: "Last but not least."
    }
  ];
  
  let currentPhotoIndex = 0;
  let textIndex = 0;
  
  const textBoxes = [
    "I don’t really know how to make a perfect birthday gift.",
    "So I made this instead.",
    "A tiny website. A little weird. A little dramatic.",
    "But it is yours.",
    "Happy Birthday, Nessie."
  ];
  
  function openPhotoBook() {
    document.getElementById("bookClosed").classList.add("hidden");
    document.getElementById("bookOpen").classList.remove("hidden");
  
    currentPhotoIndex = 0;
    showBookPage();
  }
  
  function showBookPage() {

    renderMemory(
      memories[currentPhotoIndex],
      document.getElementById("leftContent")
    );
  
    renderMemory(
      memories[currentPhotoIndex + 1],
      document.getElementById("rightContent")
    );
  }

  function renderMemory(memory, container) {

    container.innerHTML = "";
  
    if (!memory) return;
  
    const wrapper = document.createElement("div");
    wrapper.className = "memoryWrapper";
  
    if (memory.type === "image") {
  
      const img = document.createElement("img");
      img.src = memory.src;
  
      wrapper.appendChild(img);
  
    } else {
  
      const video = document.createElement("video");
  
      video.src = memory.src;
      video.controls = true;
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
  
      wrapper.appendChild(video);
    }
  
    const caption = document.createElement("p");
    caption.className = "memoryCaption";
    caption.textContent = memory.caption || "";
  
    wrapper.appendChild(caption);
  
    container.appendChild(wrapper);
  }
  
  async function nextBookPage() {
    const book = document.getElementById("bookOpen");
  
    book.classList.remove("pageFlip");
    void book.offsetWidth;
    book.classList.add("pageFlip");
  
    await wait(450);
  
    currentPhotoIndex += 2;
  
    if (currentPhotoIndex >= memories.length) {
      closePhotoBook();
    } else {
      showBookPage();
    }
  }
  
  async function closePhotoBook() {
    const bookScene = document.getElementById("photoBookScene");
    const nana = document.getElementById("nanaScene");
  
    bookScene.classList.add("fadeAway");
    nana.classList.add("fadeAway");
  
    await wait(1000);
  
    bookScene.classList.add("hidden");
    nana.classList.add("hidden");
  
    startTextScene();
  }
  
  function startTextScene() {
    textIndex = 0;
  
    const textScene = document.getElementById("textScene");
    textScene.classList.remove("hidden");
  
    document.getElementById("clickText").textContent = textBoxes[textIndex];
  }
  
  function nextTextBox() {
    textIndex++;
  
    if (textIndex >= textBoxes.length) {
      document.getElementById("textScene").classList.add("fadeAway");
  
      // next part comes here later
      return;
    }
  
    const box = document.querySelector(".textBox");
  
    box.classList.remove("textPop");
    void box.offsetWidth;
    box.classList.add("textPop");
  
    document.getElementById("clickText").textContent = textBoxes[textIndex];
  }
  
  function bumpScreen() {
    const screen = document.getElementById("birthdayAnimation");
  
    screen.classList.remove("screenBump");
    void screen.offsetWidth;
    screen.classList.add("screenBump");
  }
  
  function startFallingBehind(duration, interval) {
    const layer = document.getElementById("fallingBehind");
  
    const symbols = [
      "Ines", "Nes", "Nessie", "05/06", "2001", "25", "I", "Love", "You"
    ];
  
    const fallTimer = setInterval(() => {
      const item = document.createElement("span");
  
      item.className = "fallingItem";
      item.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  
      item.style.left = Math.random() * 100 + "vw";
      item.style.fontSize = `clamp(1rem, ${Math.random() * 4 + 2}vmin, 4rem)`;
      item.style.animationDuration = `${Math.random() * 2 + 2.5}s`;
      item.style.opacity = Math.random() * 0.5 + 0.45;
  
      layer.appendChild(item);
  
      setTimeout(() => item.remove(), 6000);
    }, interval);
  
    setTimeout(() => clearInterval(fallTimer), duration);
  }
  
  function startHeartRainFront(duration, interval) {
    const layer = document.getElementById("fallingFront");
  
    const fallTimer = setInterval(() => {
      const heart = document.createElement("img");
  
      heart.src = "heart.png";
      heart.className = "fallingHeart";
  
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.width = `${Math.random() * 120 + 120}px`;
      heart.style.animationDuration = `${Math.random() * 1.5 + 2.2}s`;
      heart.style.opacity = 1;
  
      layer.appendChild(heart);
  
      setTimeout(() => heart.remove(), 5000);
    }, interval);
  
    setTimeout(() => clearInterval(fallTimer), duration);
  }
  
  function showWord(word, stay) {
    return new Promise((resolve) => {
      const wordElement = document.getElementById("birthdayWord");
  
      wordElement.className = "";
      wordElement.textContent = "";
      void wordElement.offsetWidth;
  
      wordElement.textContent = word;
      wordElement.classList.add(stay ? "wordStay" : "wordFlash");
  
      setTimeout(resolve, stay ? 1700 : 1700);
    });
  }
  
  function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }