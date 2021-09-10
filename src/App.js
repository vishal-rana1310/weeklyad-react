import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Header from './components/header';
import Footer from './components/footer';
import Stores from './components/stores';
import Categories from './components/categories';
import CategoryStores from './components/category-stores';
import Store from './components/store';
import NewPagination from './components/newpagination';
import NewPage from './components/newpage';
import ServerAutoSuggest from './components/storeSuggestions'
import About from './components/About';
import Terms from './components/Terms';
import Privacy from './components/privacy';

function App() {
  return (
    <React.Fragment>
    <Router>
    <Header/>
    <Switch>
    <Route exact path="/about" component={About} />
    <Route exact path="/terms" component={Terms} />
    <Route exact path="/privacy-policy" component={Privacy} />
    <Route exact path="/" component={Home} />
    <Route exact path="/stores" component={Stores} />
    <Route exact path="/categories" component={Categories} />
    <Route exact path="/categories/:categoryName" component={CategoryStores} />
    <Route exact path="/:store" component={Store} />
    <Route exact path="/:Store/:adname" component={NewPagination} />
    <Route exact path="/:Store/:adname/:page" component={NewPage} />
    
    
    
    </Switch>
    <Footer/>
    </Router>
    </React.Fragment>
  );
}

export default App;
