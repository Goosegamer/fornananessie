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
    startMusic();
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
    "I couldn't be in Paris...",
    "so I made this for you.",
    "I don't know if you remember this...",
    "Back in Depok, when we used to hang out,",
    "and I would stare at you,",
    "you would ask 'What'.",
    "I would say 'Nothing'.",
    "But deep down I was dying.",
    "You looked so beautiful.",
    "I would look into your eyes for all eternity if I could.",
    "Happy Birthday Nes.",
    "Oh...one more thing.",
    "I know you're getting a Switch 2.",
    "Sooooo, drum rollll"
  ];
let typewriterTimer = null;
let isTyping = false;
let currentFullText = "";

function startTextScene() {
  textIndex = 0;

  const textScene = document.getElementById("textScene");
  textScene.classList.remove("hidden");

  typeText(textBoxes[textIndex]);
}

function nextTextBox() {
    if (isTyping) {
      finishTypingInstantly();
      return;
    }
  
    textIndex++;
  
    if (textIndex >= textBoxes.length) {
      const textScene = document.getElementById("textScene");
  
      textScene.classList.add("fadeAway");
  
      setTimeout(() => {
        textScene.classList.add("hidden");
        textScene.classList.remove("fadeAway");
  
        document.getElementById("giftScene").classList.remove("hidden");
      }, 1000);
  
      return;
    }
  
    const box = document.querySelector(".textBox");
  
    box.classList.remove("textPop");
    void box.offsetWidth;
    box.classList.add("textPop");
  
    typeText(textBoxes[textIndex]);
  }

function typeText(text) {
  const textElement = document.getElementById("clickText");

  clearInterval(typewriterTimer);

  currentFullText = text;
  textElement.textContent = "";
  isTyping = true;

  let i = 0;

  typewriterTimer = setInterval(() => {
    textElement.textContent += text[i];
    i++;

    if (i >= text.length) {
      clearInterval(typewriterTimer);
      isTyping = false;
    }
  }, 45);
}

function finishTypingInstantly() {
  clearInterval(typewriterTimer);

  document.getElementById("clickText").textContent = currentFullText;
  isTyping = false;
}
  
  function openPhotoBook() {
    document.getElementById("bookClosed").classList.add("hidden");
    document.getElementById("bookOpen").classList.remove("hidden");
  
    currentPhotoIndex = 0;
    albumFinished = false;
    showBookPage();
  }
  
  function showBookPage() {
    renderMemory(
      memories[currentPhotoIndex],
      document.getElementById("singleContent")
    );
    document.getElementById("nextMediaBtn").textContent =
    currentPhotoIndex === memories.length - 1
      ? "Finish"
      : ">";
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
        video.autoplay = false;
        video.loop = false;
        video.muted = true;
        
        video.playsInline = true;
        video.setAttribute("playsinline", "");
        video.setAttribute("webkit-playsinline", "");
        
        wrapper.appendChild(video);
    }
  
    const caption = document.createElement("p");
    caption.className = "memoryCaption";
    caption.textContent = memory.caption || "";
  
    wrapper.appendChild(caption);
  
    container.appendChild(wrapper);
  }

  let albumFinished = false;
  
  async function nextBookPage(event) {

    event.stopPropagation();
  
    if (
      currentPhotoIndex === memories.length - 1 &&
      albumFinished
    ) {
      closePhotoBook();
      return;
    }
  
    const book = document.getElementById("bookOpen");
  
    book.classList.remove("pageFlip");
    void book.offsetWidth;
    book.classList.add("pageFlip");
  
    await wait(300);
  
    if (currentPhotoIndex < memories.length - 1) {
      currentPhotoIndex++;
      showBookPage();
    } else {
  
      albumFinished = true;
  
      document.getElementById("nextMediaBtn").textContent =
        "Open Gift 🎁";
    }
  }

  function openGift() {
    const giftBox = document.getElementById("giftBox");
    const reveal = document.getElementById("giftReveal");
  
    giftBox.classList.add("giftShake");
  
    setTimeout(() => {
      giftBox.classList.add("giftOpen");
    }, 900);
  
    setTimeout(() => {
      reveal.classList.remove("hidden");
      reveal.classList.add("giftRevealIn");
  
      reveal.onclick = showFinalCatScene;
    }, 1500);
  }
  
  function showFinalCatScene() {
    document.getElementById("giftScene").classList.add("fadeAway");
  
    setTimeout(() => {
      document.getElementById("giftScene").classList.add("hidden");
      document.getElementById("finalCatScene").classList.remove("hidden");
    }, 900);
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

  function startMusic() {
    const music = document.getElementById("bgMusic");
  
    music.volume = 0.15;
    music.play().catch(() => {
      console.log("Music needs user interaction first.");
    });
  }

  function previousBookPage(event) {
    event.stopPropagation();
  
    if (currentPhotoIndex === 0) return;
  
    currentPhotoIndex--;
  
    const book = document.getElementById("bookOpen");
  
    book.classList.remove("pageFlip");
    void book.offsetWidth;
    book.classList.add("pageFlip");
  
    showBookPage();
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