import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const MovieDataWrap = styled.div`
  display: flex;
  margin-left: 10%;
  margin-top: 2%;
`;

const Img = styled.img`
  width: 150px;
  height: 260px;
`;
function MovieDetail() {
  const { title } = useParams();
  const { state } = useLocation();

  const movieData = state.movieData;
  const PosterUrl = `https://image.tmdb.org/t/p/w1280/${movieData.poster_path}`;

  return (
    <MovieDataWrap>
      <Img src={PosterUrl} alt={movieData.title} />
      <div>{title}</div>
    </MovieDataWrap>
  );
}

export default MovieDetail;
