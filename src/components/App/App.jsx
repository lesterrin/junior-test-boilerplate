import React, { useEffect } from 'react';

import ImageListContainer from '../ImageList';
import { Auth } from '../../api/api';

import classes from './App.module.css';

function App() {
  useEffect(() => {
    Auth();
  }, []);

  return (
    <>
      <header className={classes.container}>
        <h1>Тестовое задание</h1>
      </header>
      <main>
        <section>
          <ImageListContainer />
        </section>
      </main>
    </>
  );
}

export default App;
