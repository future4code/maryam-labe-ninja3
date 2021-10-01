import React from "react";
import styled from "styled-components";

const MainContainerDetalhe = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 80vh;

    h1{
        color: black;
    }
`

const ContainerSecundario = styled.div`
    display: grid;
    grid-template-columns: 1fr 30VW 25vw;
    color: black;
    @media (max-width: 800px){
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 12vh 1fr;
    }
`

const ContainerDescricao = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 800px){
        grid-column: 1/2;
        grid-row: 1/3;
        text-align: center;
        justify-content: start;
    }
`

const ContainerPagamento = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 800px){
        grid-column: 2/3;
        grid-row: 2/3;
        text-align: center;
        justify-content: start;
    }
`
const Button = styled.button`
    height: 20px;
    width: 12vw;
    margin-right: 3vw;
    margin-top: 3vh;
    background-color: #DFDCEF;
    border: none;
    border-bottom: 1px solid black;
    color: black;

    :hover{
        cursor: pointer;
        background-image: linear-gradient(to bottom right, #D3D3D3, white);
    }

    :active{
        background-color: ghostwhite;
        cursor: pointer;
        color: black    ;
    }

    
    @media (max-width: 800px){
        font-size: 10px;
        width: 20vw;
        height: 50px;
    }
`

const ContainerBotao = styled.div`
     @media (max-width: 800px){
        grid-column: 2/3;
        grid-row: 1/2;
        text-align: center;
        justify-content: start;
    }
`

class Detalhe extends React.Component{
    render(){
        const metodosDePagamento = this.props.jobDetalhe.paymentMethods.map((metodo) => {
            return(
                <div>
                    {metodo}
                </div>
            )
        })
        return(
            <MainContainerDetalhe>
                <h1>{this.props.jobDetalhe.title}</h1>
                <ContainerSecundario>
                    <ContainerDescricao>
                        <h2>
                            Descrição do Serviço:
                        </h2>
                        <div>
                            {this.props.jobDetalhe.description}
                        </div>
                    </ContainerDescricao>
                    <ContainerPagamento>
                        <h2>Métodos de Pagamento:</h2>
                        {metodosDePagamento}
                        <h2>Preço Unitário:</h2>
                        <div>
                            R${this.props.jobDetalhe.price},00
                        </div>
                    </ContainerPagamento>
                    <ContainerBotao>
                        <Button onClick={() => this.props.onClickAdicionar(this.props.jobDetalhe)} >Adicionar ao Carrinho</Button>
                    </ContainerBotao>
                </ContainerSecundario>
            </MainContainerDetalhe>
        )
    }
}

export default Detalhe