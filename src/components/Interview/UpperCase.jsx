import React, { useEffect, useState } from "react";

const UpperCase = () => {
  const [inputData, setInputData] = useState("");
  const [btnClickData, setBtnClickData] = useState("");

  const btnClick = () => {
    setBtnClickData(inputData);
  };

  useEffect(() => {
    if (btnClickData) {
      let wordsArray = btnClickData.split(" ");
      let updatedWordsArray = [];

      for (let i = 0; i < wordsArray.length; i++) {
        let word = wordsArray[i];
        let updatedWord = word.charAt(0).toUpperCase() + word.slice(1);
        updatedWordsArray.push(updatedWord);
      }

      let updatedSentence = updatedWordsArray.join(" ");
      console.log(updatedSentence);
    }
  }, [btnClickData]);

  return (
    <div className="input-group">
      <input
        type="text"
        className=""
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        placeholder="Enter Something..."
      />
      <button className="btn btn-secondary " onClick={btnClick}>
        Submit
      </button>
    </div>
  );
};

export default UpperCase;
