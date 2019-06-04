import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../elements/Header/Header';
import Home from '../Home/Home';
import NotFound from '../elements/NotFound/NotFound';
import Movie from '../Movie/Movie';
import Preferences from '../elements/Preferences/Preferences';
// import Contact from '../elements/Contact/Contact';
import Footer from '../elements/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>

      <React.Fragment>
        <Header />

        <Switch>

          <Route exact path="/" component={Home} />

          <Route exact path="/movie/:movieId" component={Movie} />

          <Route exact path="/preferences" component={Preferences} />

          <Route component={NotFound} />

        </Switch>

        <Footer />

      </React.Fragment>

    </BrowserRouter>
  )
}

export default App;