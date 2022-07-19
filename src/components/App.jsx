import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
// import { ClassNames } from '@emotion/react';
import { MovieInformation, Movies, Navbar, Actors, Profile } from './index';
import useStyles from './style';

const App = () => {
  const classes = useStyles();
  console.log(classes);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/profile/:id" element={<Profile />} />
          <Route exact path="/actors/:id" element={<Actors />} />
          <Route exact path="/movie/:id" element={<MovieInformation />} />
        </Routes>
      </main>

    </div>
  );
};

export default App;

