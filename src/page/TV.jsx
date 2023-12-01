import React from 'react';
import { tv } from "../tvDummy";
import styled from "styled-components";
import TvStyle from '../Components/TvStyle';
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

export default function TV() {
  
  return (
    <App>
      <AppContainer>
        {tv.results.map((item) => {
          return (
            <div>
              <TvStyle item={item} />
            </div>
          );
        })}
      </AppContainer>
    </App>
  );
}
