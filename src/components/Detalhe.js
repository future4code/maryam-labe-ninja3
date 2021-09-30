import React from "react";
import styled from "styled-components";

const MainContainerDetalhe = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        color: #9869BF;
    }
`

const ContainerSecundario = styled.div`
    display: grid;
    grid-template-columns: 1fr 30VW 25vw;
    color: #9869BF;
`

const ContainerDescricao = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ContainerPagamento = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Button = styled.button`
    height: 20px;
    width: 12vw;
    margin-right: 3vw;
    margin-top: 3vh;
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
                    <div>
                        <Button onClick={() => this.props.onClickAdicionar(this.props.jobDetalhe)} >Adicionar ao Carrinho</Button>
                    </div>
                </ContainerSecundario>
            </MainContainerDetalhe>
        )
    }
}

export default Detalhe