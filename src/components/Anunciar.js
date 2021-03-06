import React from "react";
import axios from "axios";
import styled from "styled-components";

const PageCadastro = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  div {
    @media (max-width: 800px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
  }
  input {      
    border-radius: 3px 3px 3px;
    font-size: 20px;
    text-align: center;
    width: auto;
    box-shadow: 3px 2px 2px 2px silver;
  }
  
  h3 {color: black}
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 25px;
`

const Button = styled.button`
    height: 20px;
    width: 8vw;
    background-color: #DFDCEF;
    border: none;
    border-bottom: 1px solid #A9A9A9;
    color: black;
    @media (max-width: 800px){
        width: 20vw;
        margin-bottom: 10px;
    }

    :hover{
        cursor: pointer;
        background-image: linear-gradient(to bottom right, #D3D3D3, white);
    }
    :active{
        background-color: ghostwhite;
        cursor: pointer;
        color: black    ;
    }
`

const headers = {
    headers: {
        Authorization: "e91a8334-e12c-42bc-b37f-a45f4631ab2a"
    }
}


class Anunciar extends React.Component{
    state = {
        tituloDoServico: "",
        descricaoDoSevico: "",
        valorDoServico: "",
        formaDePagamento: [],
        prazoDoServico: "",
    }
    
    inserirTitulo = (event) => {
        this.setState({tituloDoServico: event.target.value})
    }
    
    inserirDescricao = (event) => {
        this.setState({descricaoDoSevico: event.target.value})
    }
    
    inserirValor = (event) => {
        this.setState({valorDoServico: event.target.value})
    }
    
    inserirFormaDePagamento = (event) => {

        let formaRepetida = false

        for (let forma of this.state.formaDePagamento){
            if (forma === event.target.value){
                formaRepetida = true
            }
        }

        let value = [... this.state.formaDePagamento]

        if (formaRepetida === true){
            value = this.state.formaDePagamento.filter((forma) => {
                return (forma !== event.target.value)
            })
        } else {
            value.push(event.target.value)
        }

        this.setState({formaDePagamento: value})
    }
    
    inserirPrazo = (event) => {
      this.setState({prazoDoServico: event.target.value})
    }
    
    adicionarCasdatro = () => {
        const url = "https://labeninjas.herokuapp.com/jobs"
        const body = {
            title: this.state.tituloDoServico,
            description: this.state.descricaoDoSevico,
            price: Number(this.state.valorDoServico),
            paymentMethods: this.state.formaDePagamento,
            dueDate: this.state.prazoDoServico            
        }
    
        axios.post(url, body, headers)
        .then((response) => {
            alert("Servi??o cadastrado.")
            this.setState({
                tituloDoServico: "", 
                descricaoDoSevico:"", 
                valorDoServico: "", 
                formaDePagamento: [], 
                prazoDoServico: ""
            })
        })
        .catch((error) => {
            console.log(error.response.data.message)
            alert(error.response.data.message)
        })
    }
    render(){
        return(
            <PageCadastro>
                <h3>Cadastre seu Servi??o</h3>
                <input 
                    type="text"
                    placeholder="T??tulo do Servi??o"
                    value={this.state.tituloDoServico}
                    onChange={this.inserirTitulo}
                />
                <br></br>
                <input
                    type="text" 
                    placeholder="Descri????o do Servi??o"
                    value={this.state.descricaoDoSevico}
                    onChange={this.inserirDescricao}
                />
                <br></br>
                <input
                    type="number"
                    placeholder="Valor do Servi??o"
                    value={this.state.valorDoServico}
                    onChange={this.inserirValor}
                />
                <br></br>
                <div>
                    <label htmlFor="credito">Cart??o de Cr??dito</label>
                    <input id="credito" type='checkbox' value='Cart??o de Cr??dito' onChange={this.inserirFormaDePagamento}/> 
                    <label htmlFor="Debito">Cart??o de D??bito</label>
                    <input id="Debito" type='checkbox' value='Cart??o de D??bito' onChange={this.inserirFormaDePagamento}/> 
                    <label htmlFor="pix">Pix</label>
                    <input id="pix" type='checkbox' value='Pix' onChange={this.inserirFormaDePagamento}/> 
                    <label htmlFor="btc">Bitcoin</label>
                    <input id="btc" type='checkbox' value='Bitcoin' onChange={this.inserirFormaDePagamento}/> 
                    <label htmlFor="picpay">PicPay</label>
                    <input id="picpay" type='checkbox' value='PicPay' onChange={this.inserirFormaDePagamento}/> 
                    <label htmlFor="boleto">Boleto</label>
                    <input id="boleto" type='checkbox' value='Boleto' onChange={this.inserirFormaDePagamento}/> 
                </div>
                <br></br>
                <input 
                    type="date"
                    value={this.state.prazoDoServico}
                    onChange={this.inserirPrazo}
                />
                <br></br>
                <Button onClick={this.adicionarCasdatro}>Cadastrar</Button>
            </PageCadastro>
        )
    }
}

export default Anunciar