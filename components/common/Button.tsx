/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

const Container = styled.button`
  width: 100%;
  height: 48px;
  bordr: 0;
  border-radius: 4px;
  background-color: ${palette.bittersweet};
  color: white;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;
`;

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<IProps> = ({ children, ...props }) => (
  <Container>{children}</Container>
);

export default Button;
