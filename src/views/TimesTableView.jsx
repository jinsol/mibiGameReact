import React from "react";

const TimesTableView = () => {
  const [firstNum, setFirstNum] = React.useState(Math.ceil(Math.random() * 9));
  const [secondNum, setSecondNum] = React.useState(
    Math.ceil(Math.random() * 9)
  );
  const [value, setValue] = React.useState("");
  const [result, setResult] = React.useState("");
  const resultInputRef = React.useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if (parseInt(value) === firstNum * secondNum) {
      setResult(
        `${firstNum} 곱하기 ${secondNum}은 ${
          firstNum * secondNum
        }가 정답이 맞습니다!`
      );

      setFirstNum(Math.ceil(Math.random() * 9));
      setSecondNum(Math.ceil(Math.random() * 9));
      setValue("");
      resultInputRef.current.focus();
    } else {
      setResult("오답입니다!");
      setValue("");
      resultInputRef.current.focus();
    }
  };

  const onChange = (e) => setValue(e.target.value);

  return (
    <section>
      <h2>
        {firstNum}곱하기 {secondNum}는 무엇일까요?
      </h2>
      <form onSubmit={onSubmit}>
        <input
          ref={resultInputRef}
          type="number"
          value={value}
          onChange={onChange}
        />
        <button type="button">입력</button>
      </form>
      <div>{result}</div>
    </section>
  );
};

export default TimesTableView;
