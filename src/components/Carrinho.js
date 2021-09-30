import React from "react";
import styled from "styled-components";

const Detalhe = styled.div`
    background-color: #9869BF;
    width: 80vw;
    display: grid;
    grid-template-columns: 10vw 1fr 10vw 20vw;
    margin-top: 3vh;
    margin-left: 5vw;
    height: 10vh;
    border-radius: 10px 20px;
    

`

const MainContainerCarrinho = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    min-height: 80vh;

    h1{
        color:#9869BF;
    }
`

const ContainerTitulo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #DFDCEF;
`

const ContainerPagamento = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: #DFDCEF;
`

const ContainerPreco = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: #DFDCEF;
`

const Preco = styled.div`
    margin-bottom: 16px;
`

const Button = styled.button`
    height: 20px;
    width: 150px;
    margin-left: 5vw;
    margin-top: 3vh;
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

const ValorTotal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #9869BF;
    width: 50vw;
`

const DivInvisivel = styled.div`
    background-color: #9869BF;
    margin-top: 4vh;
    width: 90vw;
    height: 2px;
`

class Carrinho extends React.Component {

    valorTotal = () => {

        let valorTotalCarrinho = 0

        for (let job of this.props.jobsCarrinho){
            valorTotalCarrinho = valorTotalCarrinho + job.price
        }

        return(
            <ValorTotal>
                <h2>Valor Total:</h2>
                R${valorTotalCarrinho},00
            </ValorTotal>
        )

    }

    render(){

        let renderizaCarrinho = this.props.jobsCarrinho.map((job) => {
            return(
                <Detalhe >
                    <ContainerTitulo>
                        {job.title}
                    </ContainerTitulo>
                    <ContainerPagamento>
                        <div>
                            Métodos de pagamento:
                        </div>
                        <div>
                            {(job.paymentMethods[0] !== "") && job.paymentMethods[0]}
                        </div>
                        <div>
                            {(job.paymentMethods[1] !== "") && job.paymentMethods[1]}
                        </div>
                        <div>
                            {(job.paymentMethods[2] !== "") && job.paymentMethods[2]}
                        </div>
                    </ContainerPagamento>
                    <ContainerPreco>
                        <div>
                            Preço Unitário:
                        </div>
                        <Preco>
                            R${job.price}
                        </Preco>
                    </ContainerPreco>
                    <div>
                        <Button onClick={() => this.props.onClickExcluirCarrinho(job)} >Excluir do Carrinho</Button>
                    </div>
                </Detalhe>
            )
        })
        return(
            <MainContainerCarrinho>
                <h1>Seu Carrinho</h1>
                {renderizaCarrinho}
                <DivInvisivel ></DivInvisivel >
                {this.valorTotal()}
            </MainContainerCarrinho>
        )
    }
}

export default Carrinho