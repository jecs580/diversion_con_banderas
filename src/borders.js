import React from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import slugify from 'slugify'
const BordersStyled=styled.div`
    padding:.5em 2em;
    margin-right:15px;
    box-shadow:0 0  5px rgba(0,0,0,.3);
    display:inline-flex;
    margin-bottom:1rem;
    background:var(--white);
    cursor:pointer;
`

function Borders({item}) {
    const history=useHistory();
    // const id=cioc || name;
  
    function handleClick() {
      history.push(`/country/${slugify(item)}`);
    }
    return (
        <BordersStyled onClick={handleClick}>
            {item}
        </BordersStyled>
    )
}

export default Borders
