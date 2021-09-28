import React from "react";
import styled from "styled-components";

const Button = styled.button`
    height: 20px;
    width: 150px;
    margin-right: 6vw;
    margin-top: 5vh;
    background-color: #DFDCEF;
    border: none;
    border-bottom: 1px solid #9869BF;
    color: #9869BF;

    :hover{
        background-color: #9869BF;
        cursor: pointer;
        color: black    ;
    }

    :active{
        background-color: ghostwhite;
        cursor: pointer;
        color: black    ;
    }
`
class Home extends React.Component{
    render(){
        return(
            <div>
                Eu sou a Home
                <Button onClick={this.props.onClickAnunciar} >Anunciar Serviço</Button>
                <Button onClick={this.props.onClickPesquisar} >Pesquisar Serviço</Button>
            </div>
        )
    }
}

export default Home