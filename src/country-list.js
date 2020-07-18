import React,{useEffect ,useState} from "react";
import styled from 'styled-components'
import Country from './country';
import Input from './input'
import {useSelector, useDispatch} from 'react-redux'
const CountryListStyled=styled.div`
    display:grid;
    grid-row-gap:2.3em;
    background:var(--background);
    border: 1px solid red;
    justify-content:center;
    padding: 4em 2em;
    grid-template-columns :1fr;
`

function CountryList() {
    const [inputValue, setInputValue]=useState('')
    const dispatch =useDispatch()
    const countryListByName= useSelector((state)=> state.countryListByName)
    const countryList=useSelector((state)=>{
        if('' !== state.filterByRegion){
            return state.countryFilteredByRegion
        }
        if(countryListByName.length> 0){
            return countryListByName
        }
        return state.countryList
    })
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
    const filterByName=(e)=>{
        setInputValue(e.target.value)
        dispatch({
            type:'SET_COUNTRY_BY_NAME',
            payload:e.target.value
        })
    }
    const clearInput=()=>{
        dispatch({
            type:'SET_COUNTRY_BY_NAME',
            payload:''
        })
        setInputValue('')
    }
    return (
        <CountryListStyled>
            <Input placeholder="Serch for a country..." value={inputValue} onChange={filterByName}/>
            {
                inputValue && <button onClick={clearInput}>X</button>
            }
            {
                countryListByName.length===0 && inputValue && <p><strong>{inputValue}</strong> no se encuetra en los paises</p>
            }
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
