let data = [];
let currentQ = 0;

let answers = [[], [], []];
let finalOptions = [];
let selectedFinal = "";

const questions = [
  "What do you enjoy doing everyday?",
  "What comes effortlessly to you?",
  "What do people say you are good at?",
  "Choose ONE you can do forever"
];

fetch('data.json')
  .then(res => res.json())
  .then(json => {
    // 🔥 FIX YOUR DATA AUTOMATICALLY
    data = json.map(item => ({
      activity: item.Activity.trim(),

      jobs: item.Jobs
        ? item.Jobs.split(";").map(j => j.trim())
        : [],

      niche: item.Niche
        ? item.Niche.split(";").map(n => n.trim())
        : []
    }));
  });

function startQuiz() {
  document.getElementById("startScreen").classList.remove("active");
  document.getElementById("quizScreen").classList.add("active");
  loadQuestion();
}

function loadQuestion() {
  document.getElementById("questionText").innerText = questions[currentQ];

  const container = document.getElementById("optionsContainer");
  container.innerHTML = "";

  let options;

  if (currentQ < 3) {
    options = [...new Set(data.map(d => d.activity))];
  } else {
    options = finalOptions.length
      ? finalOptions
      : [...new Set(answers.flat())];
  }

  options.forEach(opt => {
    const div = document.createElement("div");
    div.className = "option";
    div.innerText = opt;

    div.onclick = () => toggleOption(div, opt);

    container.appendChild(div);
  });

  updateProgress();
}

function toggleOption(div, value) {
  if (currentQ < 3) {
    div.classList.toggle("selected");

    if (answers[currentQ].includes(value)) {
      answers[currentQ] = answers[currentQ].filter(v => v !== value);
    } else {
      answers[currentQ].push(value);
    }
  } else {
    document.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
    div.classList.add("selected");
    selectedFinal = value;
  }
}

function nextQuestion() {
  if (currentQ === 3 && !selectedFinal) {
    alert("Please choose one option!");
    return;
  }

  if (currentQ === 3) {
  document.getElementById("questionText").innerText += 
    "\n💡 Pick the one that excites you the most!";
  }

  if (currentQ < 3 && answers[currentQ].length === 0) {
    alert("Pick at least one option!");
    return;
  }

  if (currentQ === 2) {
    finalOptions = [...new Set([
      ...answers[0],
      ...answers[1],
      ...answers[2]
    ])];
  }

  currentQ++;

  if (currentQ > 3) {
    showResult();
    return;
  }

  loadQuestion();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function showResult() {
  document.getElementById("quizScreen").classList.remove("active");
  document.getElementById("resultScreen").classList.add("active");

  const match = data.find(d => d.activity === selectedFinal);

  document.getElementById("finalActivity").innerText = selectedFinal;

  document.getElementById("niche").innerText =
    "Niche: " + (match.niche?.join(", ") || "Not defined");

  const jobsList = document.getElementById("jobsList");
  jobsList.innerHTML = "";

  (match.jobs || []).forEach(job => {
    const li = document.createElement("li");
    li.innerText = job;
    jobsList.appendChild(li);
  });
}

function updateProgress() {
  const percent = ((currentQ + 1) / 4) * 100;
  document.getElementById("progressBar").style.width = percent + "%";
}

function addSuggestion() {
  const val = document.getElementById("suggestInput").value;
  if (val) {
    data.push({
      activity: val,
      jobs: ["Custom Career"],
      niche: "User Added"
    });
    alert("Added! 💙");
  }
}