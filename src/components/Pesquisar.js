import React from "react";
import styled from "styled-components";

const Detalhe = styled.div`
    background-color: white;
    width: 25vw;
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
    
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const ContainerPagamento = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    margin-top: 50px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
    
`

const ContainerPreco = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: black;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-top: 50px; 

    
`
const Preco = styled.div`
    
    margin-bottom: 80px;
    
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