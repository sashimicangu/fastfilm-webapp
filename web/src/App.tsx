import React, { useEffect } from 'react';
import './App.css';
import PageHeader from './components/header/PageHeader';
import WebFont from 'webfontloader';

function App() {
  useEffect(() => {
    document.title = 'FstFilm'

    WebFont.load({
      google: {
        families: ['inter', 'Droid Sans'],
      },
    });
  });

  return (
    <div className="app">
      <PageHeader />
    </div>
  );
}

export default App;
