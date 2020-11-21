import React from "react";
import balloongif from './animations/balloon.gif';
import styled from 'styled-components'


const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
`;

const Gif = styled.img`
 max-width: 100%;

`
const Header = styled.h1`
display: flex;
justify-content: center;
`;

const Balloon = () => {


  return (
    <>
    <Header>Balloon</Header>
    <Wrapper>
      <Gif src={balloongif}></Gif>
    </Wrapper>
    </>
  );
};

export default Balloon
