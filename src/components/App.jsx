import { useState, useEffect } from "react";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Notification from "./Notification/Notification";

import "./App.css";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedData = JSON.parse(
      window.localStorage.getItem("feedbackSaveData")
    );
    if (savedData !== null && savedData !== undefined) {
      return savedData;
    }
    return { good: 0, neutral: 0, bad: 0 };
  });
  const updateFeedback = (feedbackType) => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };
  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  useEffect(() => {
    window.localStorage.setItem("feedbackSaveData", JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <div className="appWrap">
      <Description />
      <Options
        update={updateFeedback}
        reset={resetFeedback}
        qtyFeedback={totalFeedback}
      />
      {totalFeedback ? (
        <Feedback
          feedback={feedback}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
