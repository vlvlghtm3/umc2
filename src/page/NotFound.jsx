import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const PageNotFoundWrap = styled.div`
  margin-left: 10%;
  margin-top: 5%;
`;

function PageNotFound() {
  const navigate = useNavigate(); 
  const Link = () => {
    navigate('/home');
  };

  return (
    <PageNotFoundWrap>
      <h1>해당 페이지를 찾지 못했습니다.</h1>
      <div>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</div>
      <button onClick={Link}>메인 페이지로 이동</button>
    </PageNotFoundWrap>
  );
}

export default PageNotFound;
