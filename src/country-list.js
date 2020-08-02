import React,{useEffect } from "react";
import styled from 'styled-components'
import Country from './country';
import {useSelector, useDispatch} from 'react-redux'
import Wrapper from './wrapper'
const CountryListStyled=styled.div`
    display:grid;
    grid-row-gap:2.3em;
    background:var(--background);
    grid-auto-flow:columns;
    grid-column-gap:70px;
    grid-template-columns:repeat(auto-fill,270px);
    /* border: 1px solid red; */
    justify-content:center;
    padding: 4em 0;
    /* grid-template-columns :1fr; */
`

function CountryList() {
    const dispatch =useDispatch()
    const countryListByName= useSelector((state)=> state.countryListByName)
    const countryList=useSelector((state)=>{
        if('' !== state.filterByRegion && countryListByName.length === 0){
            return state.countryFilteredByRegion
        }
        if(countryListByName.length> 0){
            return countryListByName
        }
        return state.countryList
    })
    // console.log('El estado total de mi app es:',countryList);
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
            // console.log(list.length);
        })
        .catch(()=>{
            console.log("Ops, Ocurrio un error");
        })
    },[])


    return (
        <Wrapper>
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
        </Wrapper>
    )
}

export default CountryList
