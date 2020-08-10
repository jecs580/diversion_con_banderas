import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import Wrapper from './wrapper'
import  { useSelector } from 'react-redux'
import CountrySelected from './country-selected'
const CountryPageStyled=styled.div`
.back{
    background:var(--white);
    box-shadow:0 0 10px rgba(0,0,0,.5);
    padding:.7em 2.2em;
    border-radius:5px;
    color: var(--black);
    cursor: pointer;
    font-weight:300;
    border:none;
    margin-top:1em;
    i{
        margin-right:5px;
    }
}

@media screen and (min-width:1024px){
    .back{
        margin-top:3em;
    }
}
`

function CountryPage({ match, history}) {
    // console.log("HISTORY",match.params.id);
    // console.log("HISTORY",history);
    let DBcountry = useSelector(state => state.countryList.find(item => item.alpha3Code  === match.params.id.replace('-',' '))) // match viene de props, que muestra la ruta actual y los parametros que contiene.
    // console.log("db..>",DBcountry);
    const aux= DBcountry;
    
    // console.log("aux  ",aux.name);
    const [country,setCountry]=useState(DBcountry)
    // console.log(country);
    if(country){
        if(typeof aux !== 'undefined'){
        if(country.alpha3Code!== aux.alpha3Code){
            setCountry(aux);
        }
    }
    }
    useEffect(()=>{
        if(DBcountry){
            
        }
        if(!country){
            fetch(`https://restcountries.eu/rest/v2/alpha/${match.params.id}`)
            .then((resonse)=>{
                return resonse.json()
            })
            .then((data)=>{
                setCountry(data);
            })
        }
    })
    function handleClick() {
        history.goBack();
    }
    return (
        <CountryPageStyled>
            <Wrapper>
                <button className="back" onClick={handleClick}><i className="fas fa-long-arrow-alt-left"></i> Back</button>
            <CountrySelected {...country}/>
            </Wrapper>
        </CountryPageStyled>
    )
}

export default CountryPage
