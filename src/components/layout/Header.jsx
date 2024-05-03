import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderBlock = styled.header`
  width: 100%;
  background-color: tomato;
  h2 {
    text-align: center;
    color: white;
    padding: 0.5em 0;
  }
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;

    padding: 1.2em 0;
    font-weight: 900;
    color: white;
    li {
      list-style: none;
      a {
        text-decoration: none;
        color: #fff;
        font-size: 20px;
        font-weight: 700;
        padding: 10px 20px;
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderBlock>
      <h2>
        <Link to="/">메인으로 돌아가기</Link>
      </h2>
      <ul className="row">
        <li>
          <Link to="/timesTable">구구단</Link>
        </li>
        <li>
          <Link to="/wordChain">끝말잇기</Link>
        </li>
        <li>
          <Link to="/bullsAndCows">숫자야구</Link>
        </li>
        <li>
          <Link to="/responseCheck">반응속도</Link>
        </li>
        <li>다섯번째게임</li>
        <li>여섯번째게임</li>
        <li>일곱번째게임</li>
        <li>여덟번째게임</li>
        <li>아홉번째게임</li>
      </ul>
    </HeaderBlock>
  );
};

export default Header;
