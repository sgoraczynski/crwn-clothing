import React from 'react';
import './App.css';
import HomePage from '../src/pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Switch, Route } from 'react-router-dom';
import AboutPage from './pages/aboutpage/aboutpage.component';
import Header from './components/header/header-component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/*' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
