import React from 'react'
import styled from 'styled-components'
const InputStyled=styled.label`
display:inline-flex;
background:white;
/* border: 1px solid green; */
align-items:center;
box-shadow:0 2px 9px 0 rgba(0,0,0,0.05);
padding: 0 2rem;
border-radius:5px;
flex:1;
i{
    margin-right:1.5em;
    color:#c4c4c4;
}
input{
    border:none;
    flex: 1;
    height:48px;
    line-height:48px;
    box-sizing:border-box;
    outline:0mm; /* Propiedad que coloca un linea fuera del border del elemento, para los inputs ya viene por defecto uno.*/
    font-size:12px;
    &::-webkit-input-placeholder{
        color:#c4c4c4;
        font-weight:300;
    }
}
`

function Input({...props}) {
    return (
        <InputStyled>
            <i className="fas fa-search"></i>
            <input type="text" {...props}/>
        </InputStyled>
    )
}

export default Input
