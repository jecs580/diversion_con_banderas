import React from 'react'
import styled from 'styled-components'
const CountrySelectedStyled=styled.div`

.languages{
    span{
        margin-right:10px;
        &:after{
            content:',';
        }
        &:last-child{
            &:after{
                display:none;
            }
        }
    }
}
`

function countrySelected({
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies=[],
    languages=[],
}) {
    return (
        <div>
            <CountrySelectedStyled>
                Country Selected
                <h2>{name}</h2>
                <p><strong>Native Name:</strong> {nativeName}</p>
                <p><strong>Population:</strong> {population}</p>
                <p><strong>Region:</strong> {region}</p>
                <p><strong>Sub Region:</strong> {subregion}</p>
                <p><strong>Capital:</strong> {capital}</p>
                <p><strong>Top Level Domain:</strong> {topLevelDomain}</p>
                <p><strong>Currencies:</strong> {currencies.map((item)=> <span>{item.name}</span>)}</p>
                <p className="languages"><strong>Languages:</strong> {languages.map((item)=> <span>{item.name}</span>)}</p>

                <img src={flag} alt=""/>
            </CountrySelectedStyled>
        </div>
    )
}

export default countrySelected
