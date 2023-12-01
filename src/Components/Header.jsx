import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import LoginButton from './LoginButton'; // Import the LoginButton component

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 1.2%;
  background-color: rgb(39,38,92);
  color: #fff;
`;

const Logo = styled.a`
  width: 154px;
  height: 20px;
  margin-left: 10%;
  margin-right: 1%;
  background-image: url('https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg');
  background-repeat: no-repeat;
  text-indent: -9999px;
`;

const LinkStyle = styled(Link)`
  margin-left: 1%;
  margin-right: 2%;
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <Logo href="/home" title="로고">로고</Logo>
      <LinkStyle to="/movie">영화</LinkStyle>
      <LinkStyle to="/tv">TV 프로그램</LinkStyle>
      <LinkStyle to="/celebrity">인물</LinkStyle>
      <LoginButton />
    </HeaderWrapper>
  );
}

export default Header;
