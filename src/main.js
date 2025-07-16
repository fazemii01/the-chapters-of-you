const storyContainer = document.getElementById("story-container");
const chapterTitle = document.getElementById("chapter-title");
const chapterText = document.getElementById("chapter-text");
const choicesContainer = document.getElementById("choices-container");

let currentChapter = "chapter1";

const story = {
  chapter1: {
    title: "The Beginning",
    text: "You wake up in a mysterious place. What do you do?",
    choices: [
      { text: "Look around", nextChapter: "chapter2" },
      { text: "Go back to sleep", nextChapter: "chapter3" },
    ],
  },
  chapter2: {
    title: "A New World",
    text: "You see a path leading to a forest and another to a cave.",
    choices: [
      { text: "Enter the forest", nextChapter: "chapter4" },
      { text: "Explore the cave", nextChapter: "chapter5" },
    ],
  },
  chapter3: {
    title: "Sweet Dreams",
    text: "You have a long and restful sleep. The end.",
    choices: [],
  },
  chapter4: {
    title: "The Forest",
    text: "You get lost in the forest. The end.",
    choices: [],
  },
  chapter5: {
    title: "The Cave",
    text: "You find a treasure chest! The end.",
    choices: [],
  },
};

function displayChapter(chapterId) {
  const chapter = story[chapterId];
  chapterTitle.textContent = chapter.title;
  chapterText.textContent = chapter.text;

  choicesContainer.innerHTML = "";
  chapter.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.textContent = choice.text;
    button.addEventListener("click", () => {
      currentChapter = choice.nextChapter;
      displayChapter(currentChapter);
    });
    choicesContainer.appendChild(button);
  });
}

displayChapter(currentChapter);
