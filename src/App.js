import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😬": "awkwardness",
  "🤯": "Amazement or Disbelief",
  "🍖": " Meat on Bone",
  "🍗 ": "Poultry Leg",
  "🥩": " Cut of Meat",
  "🥓": "Bacon",
  "🍔 ": "Hamburger",
  "🍟": " French Fries",
  "👺": "Evil",
  "🥴": "tired and emotional",
  "😅": "Nerves",
  "😶": "speechlessness",
  "🍐": " Pear",
  "🍑": "Peach",
  "🍒": "Cherries"
};

const emojiFullDictionary = {
  "😋": "Delicious",
  "😒": "displeasure",
  "😬": "awkwardness",
  "🤯": "Amazement or Disbelief",
  "🤥": "dishonesty",
  "🙄": "disapproval",
  "🤠": "exuberance",
  "😑": "Annoyance or frustration",
  "😅": "Nerves",
  "😖": "Disgust",
  "👺": "Evil",
  "🖖": "Vulcan Salute",
  "😐": "Neutral Sentiment",
  "😉": "Joke or flirtation",
  "😆": "Hearty Laughter",
  "🥴": "tired and emotional",
  "😶": "speechlessness",
  "👹": "Supernatural",
  "🍇": " Grapes",
  "🍈": "Melon",
  "🍉": " Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": " Pineapple",
  "🥭": " Mango",
  "🍎": "Red Apple",
  "🍏": "Green Apple",
  "🍐": " Pear",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍓": "Strawberry",
  "🍖": " Meat on Bone",
  "🍗 ": "Poultry Leg",
  "🥩": " Cut of Meat",
  "🥓": "Bacon",
  "🍔 ": "Hamburger",
  "🍟": " French Fries"
};

const emojiArray = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  const inputClickHandler = (evt) => {
    let emoji = evt.target.value;
    let tempMeaning = emojiFullDictionary[emoji];

    if (emoji === "") tempMeaning = "Enter an Emoji";
    if (tempMeaning === undefined) tempMeaning = "Oops! Couldn't find a Match";

    setMeaning(tempMeaning);
  };

  const emojiClickHandler = (emoji) => {
    let tempMeaning = emojiFullDictionary[emoji];
    setMeaning(tempMeaning);
  };

  return (
    <div className="App">
      <nav>
        <h2 className="nav-heading">Emoji Interpreter</h2>
      </nav>

      {/* Main Content */}
      <div className="main-container">
        <img src="/images/hero-img.png" alt="emoji" />
        <section>
          Hey, Have you ever faced this situation: You are chatting with your
          friend and suddenly your friend drops an emoji and you can't
          comprehend?
          <br />
          The converstion goes from text to emoji war and you find yourself
          helpless?
          <br />
          Don't fret, here is your <span>emoji-interpreter</span> to give you
          quick meaning of the emoji's and make you a Pro !
        </section>

        {/* To input an emoji */}
        <input
          onChange={inputClickHandler}
          name="text-input"
          className="text-input"
        />
        {/* To display the emoji meaning */}
        <div className="displayArea">{meaning}</div>
      </div>

      {/* Quick Access Emojis */}
      <div className="emoji-container">
        <div className="emoji-heading">Quick Access</div>
        {emojiArray.map((emoji) => {
          return (
            <span
              key={emoji}
              onClick={() => emojiClickHandler(emoji)}
              className="emoji-list"
            >
              {emoji}
            </span>
          );
        })}
      </div>

      <footer></footer>
    </div>
  );
}
