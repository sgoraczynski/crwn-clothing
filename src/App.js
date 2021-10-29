import React from 'react';
import './App.css';
import HomePage from '../src/pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import { Switch, Route } from 'react-router-dom';
import AboutPage from './pages/aboutpage/aboutpage.component.jsx';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/*' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
