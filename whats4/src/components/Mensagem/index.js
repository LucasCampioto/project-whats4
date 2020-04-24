import React from 'react';
import Styled from 'styled-components';
import Proptypes from 'prop-types'

const MainContainer = Styled.div`
    min-width:110px;
    height:70px;
    padding: 0px 10px;
    margin:15px;
    border-radius:5px;
    background-color:#ffc059;
    display:flex;
    justify-content:left;
    flex-direction:column;

    align-self: ${props => props.name === "Eu" ? "flex-end" : "flex-start" }}
    background-color: ${props => props.color === "Eu" ? "#d5ffa6" : "#ffc059"}}
    margin-right: ${props => props.right === "Eu" ? "100px": "0px"}}
`;

const NomeUsuario = Styled.p`
    font-weight:bold;
    margin-bottom:0px;
    color: ${props => props.hideName === "Eu" ? "#d5ffa6" : "black"}}
`;

const MensagemUsuario = Styled.p`
    margin-top: 0px;
    margin-top: ${props => props.textCenter === "Eu" ? "-12px": "0px"}}
`


function BalaoComentario(props) {
    return (
        <MainContainer name={props.name} color={props.name}  right={props.name} onDoubleClick={() =>{
            props.aoClicarDuasVezes(props.kay);
        }}>
            <NomeUsuario  hideName={props.name}>{props.name}</NomeUsuario>
            <MensagemUsuario textCenter={props.name}>{props.msg}</MensagemUsuario>
        </MainContainer>
    )}

BalaoComentario.propTypes ={
    name: Proptypes.string.isRequired,
    msg:Proptypes.string.isRequired
} 

    export default BalaoComentario

