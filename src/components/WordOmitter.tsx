import React, from "react";
const OMITTED_WORDS = ["a", "the", "and", "or", "but"];

function WordOmitter() {
  const [inputText, setInputText] = React.useState("Efdsfdf");
  const [omitWords, setOmitWords] = React.useState(true);

  const toggleOmitWords = () => {
    setOmitWords(!omitWords);
  };

  const clearFields = () => {
    setInputText("");
  };

  const getProcessedText = () => {
    let outputText = inputText;
    if (omitWords) {
      let words = inputText.split(" ");
      outputText = words
        .filter((word) => !OMITTED_WORDS.includes(word))
        .join(" ");
    }
    return outputText;
  };

  return (
    <div className="omitter-wrapper">
      <textarea
        placeholder="Type here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        data-testid="input-area"
      />
      <div>
        <button
          onClick={toggleOmitWords}
          data-testid="action-btn"
          className="btn btn-success"
        >
          {omitWords ? "Show All Words" : "Omit Words"}
        </button>
        <button
          onClick={clearFields}
          data-testid="clear-btn"
          className="btn btn-success"
        >
          Clear
        </button>
      </div>
      <div>
        <h2>Output:</h2>
        <p data-testid="output-text">{getProcessedText()}</p>
      </div>
    </div>
  );
}

export { WordOmitter };
