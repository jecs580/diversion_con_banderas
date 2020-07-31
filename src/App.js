import React from "react";
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import "./App.css";
import reducer from './reducer'
import CountryList from "./country-list";
import ActionList from './action-list'
import Header from './header'
import CountryPage from './country-page'
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
const initialState={
  countryList:[],
  countryListByName:[],
  countryFilteredByRegion:[],
  filterByRegion:'',
}
const store=createStore(reducer,initialState)
function App() {
  return (
    <Provider store={store}>
      <Router>
      <Header/>
      <Switch>
      <Route path="/country/:id" component={CountryPage}>
      </Route>
      <Route path="/">
      <ActionList/>
      <CountryList/>
      </Route>
      </Switch>
      </Router>
    </Provider>
  );
}

export default App;
