import React from "react";
import styled from "styled-components";

const CountryStyled = styled.div`
  width: 264px;
  text-align: left;
  box-shadow: 0 0 7px 2px rgba(0,0,0,0.03);
  border-radius:5px;
  overflow:hidden;
  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }
  .details {
    padding:1.2em 1.5em;
    padding-bottom:2.5em;
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

function Country({ flag, name, population, region, capital }) {
  return (
    <CountryStyled>
      <img src={flag} alt="" />
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
