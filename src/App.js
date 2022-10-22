

import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Home from './pages/Home/Home';
import News from './pages/News/News';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Application from './pages/Application/Application';
import MovieTheater from './pages/MovieTheater/MovieTheater';
import Movies from './pages/Movies/Movies';


export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/movies" component={Movies}></Route>
        <Route exact path="/news" component={News}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/application" component={Application}></Route>
        <Route exact path="/movieTheater" component={MovieTheater}></Route>

        <Route exact path="/" component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
}


