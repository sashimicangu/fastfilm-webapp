import React, { useEffect } from 'react';
import './App.css';
import PageHeader from './components/header/PageHeader';
import WebFont from 'webfontloader';
import AppNavigator from './navigation';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column
`;

const App = () => {
  // useEffect(() => {
  //   document.title = 'FstFilm - Home';

  //   WebFont.load({
  //     google: {
  //       families: ['inter', 'Droid Sans'],
  //     },
  //   });
  // });

  return (
    <Wrapper>
      <AppNavigator />
    </Wrapper>
  );
};

export default App;
