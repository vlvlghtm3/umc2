import React, { useEffect } from 'react';
import AdPage from '../Components/AdPage'; 
import axios from 'axios';
import { useSelector } from 'react-redux';
function Home() {
  const token10 = useSelector((state) => state.login.token);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = 'http://localhost:8000/user/payload';
    
        // axios를 사용하여 GET 요청 보내기
        const response = await axios.get(endpoint, {

          headers: {
            'Authorization': token10,
          },
        
});

        // 응답 데이터 확인
        console.log(response.data);
      } catch (error) {
        // 오류 처리
        console.error('Error during GET request:', error);
      }

    };

    // fetchData 함수 호출
    fetchData();
  }, [token10]);
  return (
    <div>
      <AdPage />
    </div>
  );
}

export default Home;