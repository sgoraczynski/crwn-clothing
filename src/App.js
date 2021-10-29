import React from 'react';
import './App.css';
import HomePage from '../src/pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import { Switch, Route } from 'react-router-dom';
import AboutPage from './pages/aboutpage/aboutpage.component.jsx';
import Header from './components/header/header-component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/*' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
