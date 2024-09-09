import s from "./Feedback.module.css";

const Feedback = ({ feedback, total, positive }) => {
  return (
    <div>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p className={s.total}>Total: {total}</p>
      <p className={s.positive}>Positive: {positive}</p>
    </div>
  );
};

export default Feedback;
