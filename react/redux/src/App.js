import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Homepage } from './components/pages/Homepage';
import { Favorites } from './components/pages/Favorites';
import { Cart } from './components/pages/Cart';
import { Navbar } from './components/Navbar';

import store from './store';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <HeaderStyled className="header">
            <Navbar />
          </HeaderStyled>

          <Switch>
            <Route path="/favorites">
              <Favorites />
            </Route>

            <Route path="/cart">
              <Cart />
            </Route>

            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

const HeaderStyled = styled.header`  
  background-color: #B3382C;
  padding: 1em;
`
export default App;