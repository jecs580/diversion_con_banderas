import React from 'react'
import styled from 'styled-components'
import Serch from './serch'
import Region  from './Region'
import Wrapper from './wrapper'
const ActionListStyled=styled.div`
    .grid{
        display:grid;
        grid-template-columns:1fr;
        grid-row-gap:20px;
    }
    @media screen and (min-width: 768px){
        .grid{
            grid-template-columns:480px 1fr 200px;
        }
    }
`

function ActionList() {
    return (
        <ActionListStyled>
            <Wrapper>
                <div className="grid">
                <Serch/>
                <span></span>
                <Region/>
                </div>
            </Wrapper>
        </ActionListStyled>
    )
}

export default ActionList
