/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import palette from '../styles/palette';
//
const Container = styled.div`
  font-size: 21px;
  color: gray;
  width: 100%;
  background: 'black';
`;
const Aa = styled.div`
background-color:${palette.black}
    width:100%;
    height:300px;
`;

const index = () => <Container />;

export default index;
