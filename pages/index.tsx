import React from 'react';
import styled from "styled-components"
import Header from '../components/Header';
import palette from '../styles/palette';

const Container = styled.div`
    font-size : 21px;
    color:gray;
    width:100%;
    background:'black';
  
  

`
const Aa = styled.div`
background-color:${palette.black}
    width:100%;
    height:300px;
`

const index = () => {
    return (
        <Container>
         <Header/>
        </Container>
    );
};

export default index
