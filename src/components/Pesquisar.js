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

const ContainerGeral = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 150vh;
    min-height: 80vh;
`

const DivFiltros = styled.div`
    height: 30vh;
    width: 40vw;
    margin-right: 4vw;
`

const DivFiltroOrdenacao = styled.div`
    display: flex;
    height: 30vh;
`
const DivInputs = styled.div`
    margin-bottom: 2vh;
`
const DivDeOrdenacoes = styled.div`
    display: flex;
`

const CardsOrdenacoes = styled.div`
    margin-right: 2vw;
    border-right: 2px solid #9869BF;
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
            <ContainerGeral>
                <DivFiltroOrdenacao>
                    <DivFiltros>
                        <h2>Filtros</h2>
                        <DivInputs>
                            <label htmlFor="valorMinimo" >Valor Mínimo:</label>
                            <input id="valorMinimo" type="number" min='0' />
                        </DivInputs>
                        <DivInputs>
                            <label htmlFor="valorMaximo" >Valor Máximo:</label>
                            <input id="valorMaximo" type="number" min='0' />
                            <button>Filtrar Por Valor</button>
                        </DivInputs>
                        <DivInputs>
                            <label htmlFor='servicoNome' >Nome do Serviço:</label>
                            <input id='servicoNome' placeholder="Nome..." />
                            <button>Filtrar Por Nome</button>
                        </DivInputs>
                    </DivFiltros>
                    <DivFiltros>
                        <h2>Ordernar Por</h2>
                        <DivDeOrdenacoes>
                            <CardsOrdenacoes>
                                <h4>Nome do Serviço</h4>
                                <button onClick={this.props.onClickNomeCrescente} >Crescente</button>
                                <button onClick={this.props.onClickNomeDecrescente} >Decrescente</button>
                            </CardsOrdenacoes>
                            <CardsOrdenacoes>
                                <h4>Preço</h4>
                                <button onClick={this.props.onClickPrecoCrescente} >Crescente</button>
                                <button onClick={this.props.onClickPrecoDecrescente } >Decrescente</button>
                            </CardsOrdenacoes>  
                            <CardsOrdenacoes>
                                <h4>Prazo</h4>
                                <button onClick={this.props.onClickPrazoCrescente} >Crescente</button>
                                <button onClick={this.props.onClickPrazoDecrescente} >Decrescente</button>
                            </CardsOrdenacoes> 
                        </DivDeOrdenacoes>
                    </DivFiltros>
                </DivFiltroOrdenacao>
                <MainContainerPesquisa>
                    {renderizaJobs}
                </MainContainerPesquisa>
            </ContainerGeral>
        )
    }
}

export default Pesquisar