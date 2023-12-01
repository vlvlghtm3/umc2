// LoginPage.jsx
import React, { useState } from 'react';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { setToken } from "../redux/loginSlice.js";
import { useDispatch } from 'react-redux';
const LoginPageWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 50px;
`;

const Title = styled.h2`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-top: 25px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ErrorMessage = styled.div`
  color: #ff0000;
  font-size: 10px;
  margin-bottom: ${({ show }) => (show ? '10px' : '0')};
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

const Button = styled.button`
  margin-top: 25px;
  padding: 10px;
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#000')};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#ccc' : '#000')};
  }
`;

const LoginPage = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [idError, setIdError] = useState(false);
  const [pwError, setPwError] = useState(false);
  const navigate = useNavigate();

  const handleIdChange = (e) => {
    const inputValue = e.target.value;
    setId(inputValue);
    const isValidId = inputValue === 'umcweb';
    setIdError(!isValidId && inputValue !== '');
  };

  const handlePwChange = (e) => {
    const inputValue = e.target.value;
    setPw(inputValue);
    const isValidPw = inputValue === '1234';
    setPwError(!isValidPw && inputValue !== '');
  };

  const isValidId = id === 'umcweb';
  const isValidPw = pw === '1234';

  const saveTokenToLocalStorage = (token, userId) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
  };

  const dispatch = useDispatch();
  const fetchData = async () => {
    try {
      const endpoint = 'http://localhost:8000/user/login';
      const requestBody = {
        id: "umcweb",
        pw: "1234"
      };

      // axios를 사용하여 POST 요청 보내기
      const response = await axios.post(endpoint, requestBody, {
        headers: {
          'Content-Type': 'application/json', 
        },
      });

      console.log('Response data:', response.data);

      // 응답 데이터 확인
      const token = response.data.result.AccessToken;
      const Id = response.data.result.userId;

      // 토큰을 로컬 스토리지에 저장
      saveTokenToLocalStorage(token, Id);


      dispatch(setToken(response.data.result.AccessToken));
      // 네비게이션
      navigate('/home');

    } catch (error) {
      // 오류 처리
      console.log('Error during POST request:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidId && isValidPw) {
      // 사용자가 로그인 버튼을 클릭하면 fetchData 함수를 호출
      fetchData();
    }
  };
  return (
    <LoginPageWrapper>
      <Title>로그인</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="아이디"
          value={id}
          onChange={handleIdChange}
        />
        <ErrorMessage show={idError}>
          올바른 아이디를 입력해 주세요.
        </ErrorMessage>
        <Input
          type="password"
          placeholder="비밀번호"
          value={pw}
          onChange={handlePwChange}
        />
        <ErrorMessage show={pwError}>
          올바른 비밀번호를 입력해 주세요.
        </ErrorMessage>
        <Button type="submit" disabled={!isValidId || !isValidPw}>
          로그인
        </Button>
      </Form>
    </LoginPageWrapper>
  );
};

export default LoginPage;