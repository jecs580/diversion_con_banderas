import React from "react";
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
    return (
        <CountryListStyled>
            <Country
             flag="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Bolivia_%28state%29.svg/1280px-Flag_of_Bolivia_%28state%29.svg.png"
             name="Bolivia"
             population={12345}
             region="America"
             capital="Sucre"/>
            <Country
             flag="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Bolivia_%28state%29.svg/1280px-Flag_of_Bolivia_%28state%29.svg.png"
             name="United States of America"
             population={323947000}
             region="Americas"
             capital="Washington. D.C."/>
            <Country
             flag="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Bolivia_%28state%29.svg/1280px-Flag_of_Bolivia_%28state%29.svg.png"
             name="Bolivia"
             population={12345}
             region="America"
             capital="Sucre"/>
        </CountryListStyled>
    )
}

export default CountryList
