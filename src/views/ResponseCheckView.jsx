import React, { useState } from "react";
import styled from "styled-components";

const ResponseCheckViewBlock = styled.section`
  #screen {
    width: 300px;
    height: 200px;
    text-align: center;
    user-select: none;
    color: white;
  }
  #screen.wating {
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
  const [state, setState] = useState({
    state: "wating",
    message: "클릭해서 시작하세요",
    result: [],
  });

  timeout;
  const onClickScreen = () => {
    if (state.state == "wating") {
      setState({ state: "ready", message: "준비하세요" });

      timeout = setTimeout(() => {
        setState({ state: "now", message: "클릭하세요" });
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if (state.state === "ready") {
      clearTimeout(timeout);
      setState({
        state: "waiting",
        message: "너무 빨리 클릭했습니다",
      });
    } else if (state.state === "now") {
      setState({
        state: "waiting",
        message: "클릭해서 시작하세요",
        result: [],
      });
    }
  };
  return (
    <ResponseCheckViewBlock>
      <div id="screen" className={state.state} onClick={onClickScreen}>
        {state.message}
      </div>
      {state.result.length !== 0 ? null : (
        <div>
          평균시간 :
          {state.result.reduce(((a, c) => a + c) / state.result.length)}
          ms
        </div>
      )}
    </ResponseCheckViewBlock>
  );
};

export default ResponseCheckView;
