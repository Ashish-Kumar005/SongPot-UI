import React, { useState } from "react";
import expandIcon from "../assets/Home10/ic_round-plus.png";
import collabeIcon from "../assets/Home10/Vector (3).png";

const QuestionAndAnswer = () => {
  const [displayAnswer, setDisplayAnswer] = useState(false);
  return (
    <div className="question-answer-wrapper">
      <div className="question">
        <h2>How to download the game ?</h2>
        <div>
          <button
            onClick={() => setDisplayAnswer(!displayAnswer)}
            className="toggle-btn-qus-ans"
          >
            {displayAnswer ? (
              <img src={collabeIcon} alt="collabe-icon" />
            ) : (
              <img src={expandIcon} alt="collabe-icon" />
            )}
          </button>
        </div>
      </div>
      {displayAnswer ? (
        <div className="answer-wrap">
          <p className="answer">
            Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Sed
            tempus urna et pharetra pharetra. Diam quam nulla portor massa id
            neque aliquam vlum morbi. Amet nulla facilisi morbi tempus iaculis
            urna id.
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default QuestionAndAnswer;
