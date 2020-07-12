import React,{useEffect ,useState} from "react";
import styled from 'styled-components'
import Country from './country';
const CountryListStyled=styled.div`
    display:grid;
    grid-row-gap:2.3em;
    background:var(--background);
    border: 1px solid red;
    justify-content:center;
    padding: 4em 2em;
`

function CountryList() {
    const [countryList,setCountryList]=useState([]);
    // hook --> useEffect
    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            setCountryList(data)
            console.log(data);
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
