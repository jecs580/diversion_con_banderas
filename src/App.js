import React from "react";
import CountryList from "./country-list";
import Region from './Region'
import "./App.css";
import {Provider} from 'react-redux'
import {createStore} from 'redux'
const initialState={
  countryList:[],
  countryListByName:[],
  countryFilteredByRegion:[],
  filterByRegion:'',
}
function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case 'SET_COUNTRY_LIST':
      console.log('Actualizando los datos');
      return {...state, countryList: action.payload} // spredd operator
    
    case 'SET_COUNTRY_BY_NAME':
      const countryListByName=(state.countryList || []).filter(country => country.name.toLowerCase().includes(action.payload.toLowerCase()))
      return {...state, countryListByName}

    case 'FILTER_BY_REGION':
      const {regionSelected}=action.payload
      if(''=== regionSelected){
        return {...state, countryFilteredByRegion:[],filterByRegion:''}
      }
      const countryFilteredByRegion=state.countryList.filter((country)=>country.region === regionSelected)
      return {...state, countryFilteredByRegion,filterByRegion:regionSelected}
    default:

      return state;
  }
}
const store=createStore(reducer,initialState)
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Region/>
      <CountryList
      />
    </div>
    </Provider>
  );
}

export default App;
