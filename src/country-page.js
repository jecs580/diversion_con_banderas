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
    i{
        margin-right:5px;
    }
}

`

function CountryPage({ match, history}) {
    console.log(history);
    let DBcountry = useSelector(state => state.countryList.find(item => item.name === match.params.id.replace('-',' ')))
    const [country,setCountry]=useState(DBcountry)
    console.log(DBcountry);
    useEffect(()=>{
        if(DBcountry){
            
        }
        if(!country){
            fetch(`https://restcountries.eu/rest/v2/name/${match.params.id}`)
            .then((resonse)=>{
                return resonse.json()
            })
            .then((data)=>{
                setCountry(data[0]);
            })
        }
    },[country, match.params.id])
    function handleClick() {
        history.goBack();
    }
    return (
        <CountryPageStyled>
            <Wrapper>
                <button className="back" onClick={handleClick}><i className="fas fa-long-arrow-alt-left"></i> Back</button>
            <CountrySelected {...country}/>
            {match.params.id}
            </Wrapper>
        </CountryPageStyled>
    )
}

export default CountryPage
