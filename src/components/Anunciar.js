import React from "react";
import axios from "axios";
import styled from "styled-components";

const PageCadastro = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  h3 {color: #9869BF}
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
        prazoDoServico: ""
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
        let value = Array.from(
            event.target.selectedOptions,
            (option) => option.value
        )
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
            alert("Serviço cadastrado.")
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
                <h3>Cadastre seu Serviço</h3>
                <input 
                    type="text"
                    placeholder="Título do Serviço"
                    value={this.state.tituloDoServico}
                    onChange={this.inserirTitulo}
                />
                <br></br>
                <input
                    type="text" 
                    placeholder="Descrição do Serviço"
                    value={this.state.descricaoDoSevico}
                    onChange={this.inserirDescricao}
                />
                <br></br>
                <input
                    type="number"
                    placeholder="Valor do Serviço"
                    value={this.state.valorDoServico}
                    onChange={this.inserirValor}
                />
                <br></br>
                <select 
                    multiple
                    value={this.state.formaDePagamento}
                    onChange={this.inserirFormaDePagamento}
                >
                    <option>Boleto</option>
                    <option>Cartão de Crédito</option>
                    <option>Cartão de Débito</option>
                    <option>PicPay</option>
                    <option>PIX</option>
                </select>
                <br></br>
                <input 
                    type="date"
                    value={this.state.prazoDoServico}
                    onChange={this.inserirPrazo}
                />
                <br></br>
                <button onClick={this.adicionarCasdatro}>Cadastrar</button>
            </PageCadastro>
        )
    }
}

export default Anunciar