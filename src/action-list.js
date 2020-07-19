import React from 'react'
import styled from 'styled-components'
import Serch from './serch'
import Region  from './Region'
import Wrapper from './wrapper'
const ActionListStyled=styled.div`
    .grid{
        display:grid;
        grid-template-columns:1fr;
        grid-row-gap:40px;
    }
`

function ActionList() {
    return (
        <ActionListStyled>
            <Wrapper>
                <div class="grid">
                <Serch/>
                <Region/>
                </div>
            </Wrapper>
        </ActionListStyled>
    )
}

export default ActionList
