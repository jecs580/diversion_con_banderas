import React from "react";
import CountryList from "./country-list";
import Region from './Region'
import "./App.css";
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducer'
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
    <i class="far fa-moon"></i>
    <div className="App">
      <Region/>
      <CountryList
      />
    </div>
    </Provider>
  );
}

export default App;
