// import React from "react";
// import styled from "styled-components";

// const Detalhe = styled.div`
//     background-color: #9869BF;
//     width: 40vw;
//     display: grid;
//     grid-template-columns: 10vw 1fr 10vw;
//     margin-top: 3vh;
//     margin-left: 5vw;
//     height: 10vh;
//     border-radius: 10px 20px;
//     :hover{
//         cursor: pointer;
//         background-color: #483C80;
//     }

// `

// const MainContainerPesquisa = styled.div`
//     display: flex;
//     flex-wrap: wrap;
// `

// const ContainerTitulo = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: #DFDCEF;
// `

// const ContainerPagamento = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: space-between;
//     color: #DFDCEF;
// `

// const ContainerPreco = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: space-between;
//     color: #DFDCEF;
// `

// const Preco = styled.div`
//     margin-bottom: 16px;
// `

import React from "react";
import styled from "styled-components";

const Detalhe = styled.div`
    background-color: white;
    width: 40vw;
    display: grid;
    grid-template-columns: 10vw 1fr 10vw;
    margin-top: 3vh;
    margin-left: 5vw;
    height: 30vh;
    border: 1px solid black;
    border-radius: 10px 20px;
    border-color: black;
    box-shadow: 5px 5px 5px 5px silver;
    
    :hover{
        cursor: pointer;
        background-image: linear-gradient(to bottom right, #D3D3D3, white);
    }

    @media (max-width: 800px){
        width: 80vw;
        display: flex;
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
    color: black;
    font-size: 25px;
    margin-left: 10px;
    width: 15vw;
    
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    @media (max-width: 800px){
        font-size: 20px;
        width: 30vw;
        align-items: center;
        justify-content: center;

    }
`

const ContainerPagamento = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    margin-top: 50px;
    margin-right: 0;
    margin-left: 6vw;
    width: 14vw;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    @media (max-width: 800px){
        font-size: 10px;
        width: 25vw;
        align-items: center;
        /* justify-content: center; */
    }
   
`

const ContainerPreco = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: black;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-top: 50px; 
    @media (max-width: 800px){
        font-size: 10px;
        width: 15vw;
        align-items: center;
        justify-content: center;
    }
`
const Preco = styled.div`
    
    margin-bottom: 80px;
    
`

const ContainerGeral = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 80vh;
    margin-bottom: 8vh;

    h1{
        color: black;
    }
`

const DivFiltros = styled.div`
    height: 30vh;
    width: 40vw;
    margin-right: 4vw;
    color: black;

    @media (max-width: 800px){
        width: 80vw;
        height: 30vh;
    }
`

const DivFiltroOrdenacao = styled.div`
    display: flex;
    height: 30vh;

    @media (max-width: 800px){
        flex-direction: column;
        height: 70vh;
    }
`
const DivInputs = styled.div`
    margin-bottom: 2vh;
    @media (max-width: 800px){
        font-size: 10px;
    }
`
const DivDeOrdenacoes = styled.div`
    display: flex;
`

const CardsOrdenacoes = styled.div`
    margin-right: 2vw;
    border-right: 2px solid #A9A9A9;
    @media (max-width: 800px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

const Input = styled.input`
    border: none;
    background-color: #DFDCEF;
    border-bottom: 1px solid #A9A9A9;
    width: 6vw;
    margin-left: 2vw;

    @media (max-width: 800px){
        font-size: 8px;
        width: 16vw;
    }
`

const Button = styled.button`
    height: 20px;
    width: 8vw;
    margin-left: 6vw;
    background-color: #DFDCEF;
    border: none;
    border-bottom: 1px solid #A9A9A9;
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
        margin-left: 8vw;
        width: 30vw;

    }
`

const ButtonNome = styled.button`
    height: 20px;
    width: 8w;
    margin-left: 4vw;
    background-color: #DFDCEF;
    border: none;
    border-bottom: 1px solid #A9A9A9;
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
        margin-left: 6vw;
    }
`

const ButtonLimpar = styled.button`
    height: 20px;
    width: 8w;
    background-color: #DFDCEF;
    border: none;
    border-bottom: 1px solid #A9A9A9;
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
    }
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
                        <br/>
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
                           <p> Preço Unitário:</p>
                        </div>
                        <Preco>
                            R${job.price},00
                        </Preco>
                    </ContainerPreco>
                </Detalhe>
            )
        })

        return(
            <ContainerGeral>
                <h1>Contrate um Ninja Agora Mesmo!</h1>
                <DivFiltroOrdenacao>
                    <DivFiltros>
                        <h2>Filtros</h2>
                        <DivInputs>
                            <label htmlFor="valorMinimo" >Valor Mínimo:</label>
                            <Input id="valorMinimo" placeholder="Mínimo..." type="number" min='0' value={this.props.filtroValorMinimo} onChange={this.props.onChangeInputValorMinimo} />
                        </DivInputs>
                        <DivInputs>
                            <label htmlFor="valorMaximo" >Valor Máximo:</label>
                            <Input id="valorMaximo" placeholder="Máximo..." type="number" min='0' value={this.props.filtroValorMaximo} onChange={this.props.onChangeInputValorMaximo} />
                            <Button onClick={this.props.filtrarPorValor} >Filtrar Por Valor</Button>
                        </DivInputs>
                        <DivInputs>
                            <label htmlFor='servicoNome' >Nome do Serviço:</label>
                            <Input id='servicoNome' placeholder="Nome..." value={this.props.filtroNome} onChange={this.props.onChangeInputNome} />
                            <ButtonNome onClick={this.props.filtrarPorNome} >Filtrar Por Nome</ButtonNome>
                        </DivInputs>
                        <ButtonLimpar onClick={this.props.getAllJobs} >Limpar Filtros</ButtonLimpar>
                    </DivFiltros>
                    <DivFiltros>
                        <h2>Ordernar Por</h2>
                        <DivDeOrdenacoes>
                            <CardsOrdenacoes>
                                <h4>Nome do Serviço</h4>
                                <ButtonLimpar onClick={this.props.onClickNomeCrescente} >Crescente</ButtonLimpar>
                                <ButtonLimpar onClick={this.props.onClickNomeDecrescente} >Decrescente</ButtonLimpar>
                            </CardsOrdenacoes>
                            <CardsOrdenacoes>
                                <h4>Preço</h4>
                                <ButtonLimpar onClick={this.props.onClickPrecoCrescente} >Crescente</ButtonLimpar>
                                <ButtonLimpar onClick={this.props.onClickPrecoDecrescente } >Decrescente</ButtonLimpar>
                            </CardsOrdenacoes>  
                            <CardsOrdenacoes>
                                <h4>Prazo</h4>
                                <ButtonLimpar onClick={this.props.onClickPrazoCrescente} >Crescente</ButtonLimpar>
                                <ButtonLimpar onClick={this.props.onClickPrazoDecrescente} >Decrescente</ButtonLimpar>
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