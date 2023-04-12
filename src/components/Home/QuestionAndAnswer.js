import React, { useState } from "react";
import expandIcon from "../../assets/Home10/ic_round-plus.png";
import collabeIcon from "../../assets/Home10/Vector (3).png";

const QuestionAndAnswer = ({questionsAnswersArray}) => {
  const [displayAnswer, setDisplayAnswer] = useState(false);
  return (
    <>
      {questionsAnswersArray.map((question, index) => {
        return (
          <div className="question-answer-wrapper" key={index}>
            <div className="question">
              <h2>{question.qus}</h2>
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
                  {question.ans}
                </p>
              </div>
            ) : null}
          </div>
        );
      })}
    </>
  );
};

export default QuestionAndAnswer;
