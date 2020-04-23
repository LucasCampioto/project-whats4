import React from 'react';
import Styled from 'styled-components';
import Proptypes from 'prop-types'

const MainContainer = Styled.div`
    min-width:110px;
    height:auto;
    padding:0px 10px;
    margin:15px;
    border-radius:5px;
    background-color:#ffc059;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    }
`;

const NomeUsuario = Styled.p`
    font-weight:bold;
    margin-bottom:3px;
`;

function Comentario(props) {
    return (
        <MainContainer onDoubleClick={() =>{
            props.aoClicarDuasVezes(props.kay);
        }}>
            <NomeUsuario>{props.name}</NomeUsuario>
            <p>{props.msg}</p>
        </MainContainer>
    )}

Comentario.propTypes ={
    name: Proptypes.string.isRequired,
    msg:Proptypes.string.isRequired
} 

    export default Comentario

