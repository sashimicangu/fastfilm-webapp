import React, { useEffect } from 'react';
import './App.css';
import WebFont from 'webfontloader';
import AppNavigator from './navigation';
import styled from 'styled-components';

const Wrapper = styled.div`
  // width: 100vw;
  height: 100vh;
  // display: flex;
  // flex: 1,
  // flex-direction: column
`;

const App = () => {
  return (
    <Wrapper>
      <AppNavigator />
    </Wrapper>
  );
};

export default App;
