import React, { useEffect } from 'react';

import ImageListContainer from '../ImageList/ImageListContainer';
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
        <p>
          API имеет ограничение на 50 запросов в час. По исчерпанию лимита
          запросы приниматься не будут.
        </p>
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
