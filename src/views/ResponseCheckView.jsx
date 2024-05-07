import React, { useRef, useState } from "react";
import styled from "styled-components";

const ResponseCheckViewBlock = styled.section`
  #screen {
    width: 300px;
    height: 200px;
    text-align: center;
    user-select: none;
    color: white;
    font-size: 1.2em;
  }
  #screen.waiting {
    background-color: blue;
  }
  #screen.ready {
    background-color: red;
  }
  #screen.now {
    background-color: greenyellow;
  }
`;

const ResponseCheckView = () => {
  const [state, setState] = useState("waiting");
  const [message, setMessage] = useState("클릭해서 시작하세요.");
  const [result, setResult] = useState([]);
  const timeOut = useRef(null);
  const startTime = useRef();
  const endTime = useRef();

  const onClickScreen = () => {
    if (state == "waiting") {
      setState("ready");
      setMessage("초록색이 되면 클릭하세요");
      timeOut.current = setTimeout(() => {
        setState("now");
        setMessage("지금 클릭");
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if (state == "ready") {
      clearTimeout(timeOut.current);
      setState("waiting");
      setMessage("너무 빨리 클릭했습니다. 초록색일 때 클릭하세요.");
    } else if (state == "now") {
      endTime.current = new Date();
      setState("waiting");
      setMessage("클릭해서 시작하세요");
      setResult((prevResult) => {
        return [...prevResult, endTime.current - startTime.current];
      });
    }
  };

  const onReset = () => setResult([]);
  const renderAverage = () => {
    return result.length === 0 ? null : (
      <>
        <div>평균 시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
        <button onClick={onReset}>리셋</button>
      </>
    );
  };

  return (
    <ResponseCheckViewBlock>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      {renderAverage()}
    </ResponseCheckViewBlock>
  );
};

export default ResponseCheckView;
