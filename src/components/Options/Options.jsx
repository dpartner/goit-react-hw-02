import s from "./Options.module.css";

const Options = ({ update, reset, qtyFeedback }) => {
  return (
    <div className={s.optionWrap}>
      <button className={s.optionButton} onClick={() => update("good")}>
        Good
      </button>
      <button className={s.optionButton} onClick={() => update("neutral")}>
        Neutral
      </button>
      <button className={s.optionButton} onClick={() => update("bad")}>
        Bad
      </button>

      {qtyFeedback > 0 && (
        <button className={s.optionButton} onClick={reset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
