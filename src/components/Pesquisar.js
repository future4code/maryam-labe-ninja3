import React from "react";
import styled from "styled-components";

const Detalhe = styled.div`
    background-color: #9869BF;
    width: 30vw;
    :hover{
        cursor: pointer;
        width: 40vw;
    }

`

const MainContainerPesquisa = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

class Pesquisar extends React.Component{
    render(){
        return(
            <MainContainerPesquisa>
                Eu sou pesquisar serviços.
                <Detalhe onClick={this.props.onClickDetalhe} >
                    Clique aqui para ver o detalhe do produto
                </Detalhe>
            </MainContainerPesquisa>
        )
    }
}

export default Pesquisar