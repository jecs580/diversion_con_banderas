import React,{useEffect ,useState} from "react";
import styled from 'styled-components'
import Country from './country';
import {useSelector, useDispatch} from 'react-redux'
const CountryListStyled=styled.div`
    display:grid;
    grid-row-gap:2.3em;
    background:var(--background);
    border: 1px solid red;
    justify-content:center;
    padding: 4em 2em;
`

function CountryList() {
    const dispatch =useDispatch()
    const countryList=useSelector((state)=>state.countryList)
    console.log('El estado total de mi app es:',countryList);
    // hook --> useEffect
    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then((res)=>{
            return res.json();
        })
        .then((list)=>{
            dispatch({
                type:'SET_COUNTRY_LIST',
                payload:list
            })
            console.log(list.length);
        })
        .catch(()=>{
            console.log("Ops, Ocurrio un error");
        })
    },[])
    return (
        <CountryListStyled>
            {
                countryList.map(({flag,name,population,region,capital})=>{
                    return (
                        <Country
                        flag={flag}
                        name={name}
                        population={population}
                        region={region}
                        capital={capital}
                        key={name}/>
                    )
                })
            }
           
           
        </CountryListStyled>
    )
}

export default CountryList
