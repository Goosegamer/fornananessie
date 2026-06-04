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