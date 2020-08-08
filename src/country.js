import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import slugify from 'slugify'
const CountryStyled = styled.div`
  /* width: 264px; */
  cursor:pointer;
  text-align: left;
  box-shadow: 0 0 7px 2px rgba(0,0,0,0.03);
  border-radius:5px;
  margin:auto;
  /* overflow:hidden; */
  &:hover .details{
    border-radius: 0 0 5px 5px;
    border:1px solid var(--black);
    border-top:none;
  }
  img {
    border-radius:5px 5px 0 0;
    width: 100%;
    height: 160px;
    object-fit: cover;
    vertical-align:top;
  }
  .details {
    padding:1.2em 1.5em;
    padding-bottom:2.5em;
    border:1px solid transparent;
    border-top:none;
    transition:.3s border;
    background: var(--white)
  }
  h2 {
    margin: 0;
    margin-bottom: 1rem;
    font-size: 18px;
    font-weight:700;
  }
  p {
    span{
      font-weight:600;
      color:black;
    }
    font-weight:300;
    font-size: 0.85em;
    margin: 0.4rem 0;
  }
`;
function Country({ flag, name, population, region, capital, nativeName,cioc,alpha2Code }) {
  const history=useHistory();
  // const id=cioc || name;

  function handleClick() {
    history.push(`/country/${slugify(alpha2Code)}`); // Crea una ruta especifica
  }
  return (
    <CountryStyled onClick={handleClick}>
      {/* loading="lazi":Atributo de html que sirve para hacer una peticion de ese atributo a medida que vas haciendo scroll, por defecto carga una cantidad pequeña de datos.Ojo para que esto puedas verlo debes tener desabilitado la cache del browser*/}
      <img loading="lazy" src={flag} alt="" />
      <div className="details">
        <h2>{name}</h2>
        <p>
          <span>Population:</span> {population}
        </p>
        <p>
          <span>Region:</span> {region}
        </p>
        <p>
          <span>Capital:</span> {capital}
        </p>
      </div>
    </CountryStyled>
  );
}

export default Country;
