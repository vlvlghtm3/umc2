import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Movie from './page/Movie';
import TV from './page/TV';
import Celebrity from './page/Celebrity';
import Home from './page/Home'; 
import MovieDetail from './page/MovieDetail';
import PageNotFound from './page/NotFound';
import LoginPage from './page/LoginPage';

function App() {
  return (
      <div className="root-wrap">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/movie/:title" element={<MovieDetail />} />
            <Route path="/tv" element={<TV />} />
            <Route path="/celebrity" element={<Celebrity />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;



