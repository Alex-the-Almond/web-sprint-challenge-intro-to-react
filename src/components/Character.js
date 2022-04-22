// Write your Character component here
import React from 'react';
import styled from 'styled-components';

 const Character = (props) => {
    const StyledDiv = styled.div`
    background-image: url('https://imgs.search.brave.com/lh2K6y0zTLoY_Ta21ZIDyZ4XVEVlF7aQdnYtNAojVYM/rs:fit:736:736:1/g:ce/aHR0cHM6Ly9zLW1l/ZGlhLWNhY2hlLWFr/MC5waW5pbWcuY29t/LzczNngvNWEvYzEv/OWEvNWFjMTlhN2Yz/YmNiNjhjOTcyZGYy/MmE5MzRlMzAyOTMu/anBn');
    border: solid 2px lemonchiffon;
    width: 50%
    margin: 1em;
    margin-left: 13em;
    margin-right: 14em;
    margin-top: 1em;
    `
    const StyledH3 = styled.h3`
    font-size: 2rem;
    padding-top: .2em;
    color: yellow;
    text-shadow: 3px 3px black;
    `

    const StyledP = styled.p`
    font-size: 1rem;
    color: white;
    text-shadow: 1px 1px black;
    `
    
    return (
        <StyledDiv>
            <StyledH3>Name: {props.data.name}</StyledH3>
            <StyledP>Birth Year: {props.data.birth_year}</StyledP>
            <StyledP>Eye Color: {props.data.eye_color}</StyledP>
            <StyledP>Gender: {props.data.gender}</StyledP>
            <StyledP>Hair Color: {props.data.hair_color}</StyledP>
            <StyledP>Height: {props.data.height}</StyledP>
            <StyledP>Skin Color: {props.data.skin_color}</StyledP>
        </StyledDiv>
    )
}
export default Character