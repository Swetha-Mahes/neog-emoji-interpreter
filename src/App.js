import React, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "😀": "Happy",
  "😬": "Awkward smile",
  "😂": "Laugh",
  "😇": "Blessed",
  "😉": "Wink",
  "😊": "smile",
  "😋": "Tasty",
  "😍": "Love",
  "😘": "Kiss",
  "😜": "Cray",
  "😡": "Angry",
  "😎": "Cool",
  "🤗": "Hug",
  "😱": "Shock",
  "😭": "Cry"
};
var knownEmojis =Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");
  function inputEmojiHandler(event) {
    var inputEmoji = event.target.value;
    var meaning = emojiDictionary[inputEmoji];
    if (meaning === undefined) {
      meaning = "Sorry, We dont have this emoji in our database";
    }
    setMeaning(meaning);
  }

  function clickEmojiHandler(emoji){
    var meaning = emojiDictionary[emoji]
    setMeaning(meaning);
  }
  return (
    <div className="App">

      <h1>Know your emojis</h1>
      
      <input placeholder="Enter your emoji here" onChange={inputEmojiHandler} />
      
      <h2>{meaning}</h2>
      
      <h3>Emojis we know</h3>
      {knownEmojis.map(function(emoji){
        return(
        <span 
        style={{fontSize:"1.2rem", cursor:"pointer"}}
        key={emoji} 
        onClick={()=>clickEmojiHandler(emoji)}> 
        {emoji} 
        </span> );
      })}
    </div>
  );
}
