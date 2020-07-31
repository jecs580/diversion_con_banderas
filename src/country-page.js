import React from 'react'
import styled from 'styled-components'
const CountryPageStyled=styled.div`

`

function CountryPage({match}) {
    return (
        <CountryPageStyled>
            Pais
            {match.params.id}
        </CountryPageStyled>
    )
}

export default CountryPage
