import { useState } from "react";
import "./styles.css";

var emojiDataset = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "😂": "Face with Tears of Joy",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "😍": "Smiling Face with Heart-Eyes",
  "😘": "Kissing Face",
  "😚": "Kissing Face with Closed Eyes",
  "😙": "Kissing Face with Smiling Eyes",
  "😋": "Face Savoring Food",
  "😛": "Face with Tongue",
  "😜": "Winking Face with Tongue",
  "😝": "Squinting Face with Tongue"
};

export default function App() {
  var [meaning, setMeaning] = useState("");
  var emojiList = Object.keys(emojiDataset);

  function inputHandler(event) {
    var emoji = event.target.value;
    setMeaning(emojiDataset[emoji]);
  }

  function clickHandler(emoji) {
    setMeaning(emojiDataset[emoji]);
  }

  return (
    <div className="emojiSection">
      <h1 className="header">inside outt</h1>

      <input
        className="inputArea"
        onChange={inputHandler}
        placeholder="Enter emoji here"
      />

      <h2 className="outputArea"> {meaning} </h2>
      <h2>
        {emojiList.map(function (item) {
          return (
            <span className="listArea" onClick={() => clickHandler(item)}>
              {item}
            </span>
          );
        })}
      </h2>
    </div>
  );
}
