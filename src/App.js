import React from "react";
import CountryList from "./country-list";
import "./App.css";
import {Provider} from 'react-redux'
import {createStore} from 'redux'
const initialState={
  countryList:[]
}
function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case 'SET_COUNTRY_LIST':
      console.log('Actualizando los datos');
      return {...state, countryList: action.payload} // spredd operator
    default:

      return state;
  }
}
const store=createStore(reducer,initialState)
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <CountryList
      />
    </div>
    </Provider>
  );
}

export default App;
