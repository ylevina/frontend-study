import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Homepage } from './components/pages/Homepage';
import { Favorites } from './components/pages/Favorites';
import { Cart } from './components/pages/Cart';
import { Navbar } from './components/Navbar';

function App() {  
  return (
    <Router>
      <div>
        <HeaderStyled className="header">
          <Navbar></Navbar>
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
  );
}

const HeaderStyled = styled.header`  
  background-color: #B3382C;
  padding: 1em;
`
export default App;