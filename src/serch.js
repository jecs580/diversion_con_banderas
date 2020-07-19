import React,{useState} from 'react'
import styled from 'styled-components'
import Input from './input'
import {useDispatch} from 'react-redux'
const SerchStyled=styled.div`
    display:flex;
`

function Serch() {
    const dispatch =useDispatch()
    const [inputValue, setInputValue]=useState('')
    const filterByName=(e)=>{
        setInputValue(e.target.value)
        dispatch({
            type:'SET_COUNTRY_BY_NAME',
            payload:e.target.value
        })
    }
    const clearInput=()=>{
        dispatch({
            type:'SET_COUNTRY_BY_NAME',
            payload:''
        })
        setInputValue('')
    }
    return (
        <SerchStyled>
            {
                inputValue && <button onClick={clearInput}>X</button>
            }
            {/* {
                countryListByName.length===0 && inputValue && <p><strong>{inputValue}</strong> no se encuetra en los paises</p>
            } */}
            <Input placeholder="Serch for a country..." value={inputValue} onChange={filterByName}/>
        </SerchStyled>
    )
}

export default Serch
