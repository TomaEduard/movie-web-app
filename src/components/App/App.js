import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../elements/Header/Header';
import Home from '../Home/Home';
import NotFound from '../elements/NotFound/NotFound';
import Movie from '../Movie/Movie';


// $(document).ready(function () {
//   $('.nav-button').click(function () {
//     $('.nav-button').toggleClass('change');
//   });

//   $(window).scroll(function () {
//     let position = $(this).scrollTop();
//     if (position >= 200) {
//       $('.nav-menu').addClass('custom-navbar');
//     } else {
//       $('.nav-menu').removeClass('custom-navbar');
//     }
//   });
// });

const App = () => {
  return (
    <BrowserRouter>

      <React.Fragment>
        <Header />

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/:movieId" component={Movie} exact />
          <Route componet={NotFound} />
        </Switch>

      </React.Fragment>

    </BrowserRouter>
  )
}

export default App;