import React, { useState, useEffect, useRef } from 'react';
import MovieStyle from '../Components/MovieStyle';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const App = styled.div`
  margin-left: 5%;
  margin-right: 5%;
`;

const AppContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Loader = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const Movie = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const loaderRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = process.env.REACT_APP_TMDB_TOKEN;

      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              accept: 'application/json',
            },
          }
        );
        setMovies((prevMovies) => [...prevMovies, ...response.data.results]);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchData();
  }, [page]);

  const clickPoster = (item) => {
    navigate(`/movie/${item.title}`, { state: { movieData: item } });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    },
    {
      threshold: 0.5, // 로더가 뷰포트의 50% 이상이 보일 때 작동
    }
  );

  useEffect(() => {
    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loaderRef, observer]);

  return (
    <App>
      <AppContainer>
        {movies.map((item) => (
          <div key={item.id} onClick={() => clickPoster(item)}>
            <MovieStyle item={item} />
          </div>
        ))}
      </AppContainer>
      <Loader ref={loaderRef}>로딩 중...</Loader>
    </App>
  );
};

export default Movie;
