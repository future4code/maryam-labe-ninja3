import React from "react";
import styled from "styled-components";

const Detalhe = styled.div`
    background-color: #9869BF;
    width: 40vw;
    display: grid;
    grid-template-columns: 10vw 1fr 10vw;
    margin-top: 3vh;
    margin-left: 5vw;
    height: 10vh;
    border-radius: 10px 20px;
    :hover{
        cursor: pointer;
        background-color: #483C80;
    }

`

const MainContainerPesquisa = styled.div`
    display: flex;
    flex-wrap: wrap;
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

class Pesquisar extends React.Component{
    render(){

        const renderizaJobs = this.props.allJobs.map((job) => {
            return(
                <Detalhe onClick={() => this.props.onClickDetalhe(job)} >
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
                </Detalhe>
            )
        })

        return(
            <MainContainerPesquisa>
                {renderizaJobs}
            </MainContainerPesquisa>
        )
    }
}

export default Pesquisar