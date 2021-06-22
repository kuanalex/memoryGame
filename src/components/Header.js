import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";



const Header = () => {
  return (
    <>
    <HeaderWrapper>
      <Logo src={logo} alt="logo"></Logo>
    </HeaderWrapper>

    <Line>
      <Circle size="60px" borderWidth="6px">
        <Circle size="40px" borderWidth="4px"></Circle>
      </Circle>
    </Line>
    </>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #ef0e3d
`

const Logo = styled.img`
  max-width: 700px;
`

const Line = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  background-color: #383838;
`

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  border: ${(props) => props.borderWidth} solid #383838;
  border-radius: 50%;
  background-color: #eee;
`

export default Header;