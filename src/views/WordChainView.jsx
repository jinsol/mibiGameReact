import React from "react";

const WordChainView = () => {
  const [word, setWord] = React.useState("끝말잇기");
  const [value, setValue] = React.useState("");
  const [result, setResult] = React.useState("");

  const onRefInput = React.useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult("정답");
      setWord(value);
      setValue("");
      onRefInput.current.focus();
    } else {
      setResult("오답");
      setWord(word);
      setValue("");
      onRefInput.current.focus();
    }
  };
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <section>
      <h2>{word}</h2>
      <form onSubmit={onSubmit}>
        <input type="text" ref={onRefInput} value={value} onChange={onChange} />
        <button>제출</button>
      </form>
      <h2>{result}</h2>
    </section>
  );
};

export default WordChainView;
