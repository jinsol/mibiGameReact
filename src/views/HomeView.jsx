import React from "react";
import styled from "styled-components";

const HomeViewBlock = styled.section`
  display: grid;
  place-items: center;
  height: 90vh;
`;

const HomeView = () => {
  return (
    <HomeViewBlock>
      <h2>게임을 선택하세요</h2>
    </HomeViewBlock>
  );
};

export default HomeView;
