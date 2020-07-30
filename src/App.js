import React from "react";
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import "./App.css";
import reducer from './reducer'
import CountryList from "./country-list";
import ActionList from './action-list'
import Header from './header'
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
      <Header/>
      <ActionList/>
      <CountryList
      />
    </Provider>
  );
}

export default App;
