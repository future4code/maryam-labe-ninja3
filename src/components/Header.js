import React from 'react';
import styled from 'styled-components';

const MainContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #9869BF;
    height: 10vh;

    h1{
        margin-left: 3vw;
        color: #DFDCEF;
    }
`

const Button = styled.button`
    height: 20px;
    width: 150px;
    margin-right: 6vw;
    margin-top: 5vh;
    background-color: #9869BF;
    border: none;
    border-bottom: 1px solid #DFDCEF;
    color: #DFDCEF;

    :hover{
        background-color: #DFDCEF;
        cursor: pointer;
        color: black    ;
    }

    :active{
        background-color: ghostwhite;
        cursor: pointer;
        color: black    ;
    }
`

class Header extends React.Component {
    render(){
        return(
            <MainContainerHeader>
                <h1>LabeNinja</h1>
                <Button onClick={this.props.onClickHome} >Home</Button>
                <Button onClick={this.props.onClickAnunciar} >Anunciar Serviço</Button>
                <Button onClick={this.props.onClickPesquisar} >Pesquisar Serviço</Button>
            </MainContainerHeader>
        )
    }
}

export default Header