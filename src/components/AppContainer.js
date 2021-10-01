import React, { Component } from 'react'
import Header from './Header'
import Home from './Home'
import Anunciar from './Anunciar'
import Pesquisar from './Pesquisar'
import Detalhe from './Detalhe'
import GlobalStyle from '../theme/GlobalStyle'
import Footer from './Footer'
import styled from 'styled-components';
import Axios from 'axios'
import Carrinho from './Carrinho'


const headers = {
  headers : {
    Authorization:"e91a8334-e12c-42bc-b37f-a45f4631ab2a"
  }
}

export class AppContainer extends Component {
  state = {
    paginaHome: true,
    paginaAnunciar: false,
    paginaPesquisar: false,
    paginaDetalhe: false,
    paginaCarrinho: false,
    allJobs: [],
    jobDetalhe: [],
    jobsCarrinho:[],
    filtroValorMaximo: "",
    filtroValorMinimo: "",
    filtroNome: "",
  }

  componentDidMount = () => {
    this.getAllJobs()

    if(window.localStorage.getItem("carrinho")){
      let listaCarrinhoStorage = JSON.parse(window.localStorage.getItem("carrinho"))
      this.setState({jobsCarrinho: listaCarrinhoStorage})
    }
  }

  componentDidUpdate = (prevProps, prevState) => {

    if (prevState.jobsCarrinho !== this.state.jobsCarrinho){
      window.localStorage.setItem("carrinho", JSON.stringify(this.state.jobsCarrinho))
    }

    if (prevState.produtoAdicionado === true){
      this.setState({produtoAdicionado: false})
    }
  }

  getAllJobs = () => {
    Axios.get('https://labeninjas.herokuapp.com/jobs', headers)
    .then((res) => {
      this.setState({allJobs: res.data.jobs})
    })
    .catch((err) => {
      alert(err.response.data.error)
    })

    this.setState({filtroValorMinimo: ""})
    this.setState({filtroValorMaximo: ""})
    this.setState({filtroNome: ""})
  }

  onClickAnunciar = () => {
    this.setState({paginaAnunciar: true})
    this.setState({paginaDetalhe: false})
    this.setState({paginaHome: false})
    this.setState({paginaPesquisar: false})
    this.setState({paginaCarrinho: false})
  }

  onClickHome = () => {
    this.setState({paginaHome: true})
    this.setState({paginaAnunciar: false})
    this.setState({paginaDetalhe: false})
    this.setState({paginaPesquisar: false})
    this.setState({paginaCarrinho: false})
  }

  onClickPesquisar = () => {
    this.setState({paginaPesquisar: true})
    this.setState({paginaHome: false})
    this.setState({paginaAnunciar: false})
    this.setState({paginaDetalhe: false})
    this.setState({paginaCarrinho: false})

    this.getAllJobs()

    console.log(new Date(this.state.allJobs[0].dueDate) - new Date(this.state.allJobs[1].dueDate))
  }

  onClickDetalhe = (job) => {
    this.setState({paginaDetalhe: true})
    this.setState({paginaPesquisar: false})
    this.setState({paginaHome: false})
    this.setState({paginaAnunciar: false})
    this.setState({paginaCarrinho: false})

    this.setState({jobDetalhe: job})
  }

  onClickCarrinho = () => {
    this.setState({paginaCarrinho: true})
    this.setState({paginaDetalhe: false})
    this.setState({paginaPesquisar: false})
    this.setState({paginaHome: false})
    this.setState({paginaAnunciar: false})
    
  }

  onClickAdicionar = (job) => {
    let itemNoCarrinho = false

    console.log(this.state.jobsCarrinho)
    for (let item of this.state.jobsCarrinho){
      console.log(item)
      if(item.id === job.id){
        itemNoCarrinho = true
      }
    }

    let novoJobsCarrinho = [...this.state.jobsCarrinho]

    if (itemNoCarrinho) {
      alert("Esse item já está no carrinho.\n\nVocê não pode adicionar um item no carrinho mais de uma vez.\n\nClique no ícone do carrinho para visualizar seus serviços escolhidos.")
    } else{
      novoJobsCarrinho.push(job)
      alert("Serviço adicionado ao carrinho!")
    }

    this.setState({jobsCarrinho: novoJobsCarrinho})
  }

  onClickExcluirCarrinho = (jobExcluir) => {

    let novaListaDeJobs = this.state.jobsCarrinho.filter((job) => {
      return (job.id !== jobExcluir.id)
    })

    this.setState({jobsCarrinho: novaListaDeJobs})
  }

  onClickPrecoCrescente = () => {

    let listaOrdenada = this.state.allJobs.sort((a, b) => {
      return (a.price - b.price)
    })

    this.setState({allJobs:listaOrdenada})
  }

  onClickPrecoDecrescente = () => {

    let listaOrdenada = this.state.allJobs.sort((a, b) => {
      return -(a.price - b.price)
    })

    this.setState({allJobs:listaOrdenada})
  }

  onClickNomeCrescente = () => {

    let listaOrdenada = this.state.allJobs.sort((a, b) => {
      if(a.title > b.title){
        return 1
      } else if (b.title > a.title){
        return -1
      } else{
        return 0
      }
    })

    this.setState({allJobs:listaOrdenada})
  }

  onClickNomeDecrescente = () => {

    let listaOrdenada = this.state.allJobs.sort((a, b) => {
      if(a.title > b.title){
        return -1
      } else if (b.title > a.title){
        return 1
      } else{
        return 0
      }
    })

    this.setState({allJobs:listaOrdenada})
  }

  onClickPrazoCrescente = () => {

    let listaOrdenada = this.state.allJobs.sort((a, b) => {
      if(new Date(a.dueDate) > new Date(b.dueDate)){
        return 1
      } else if (new Date(a.dueDate) < new Date(b.dueDate)){
        return -1
      } else{
        return 0
      }
    })

    this.setState({allJobs:listaOrdenada})
  }

  onClickPrazoDecrescente = () => {

    let listaOrdenada = this.state.allJobs.sort((a, b) => {
      if(new Date(a.dueDate) > new Date(b.dueDate)){
        return -1
      } else if (new Date(a.dueDate) < new Date(b.dueDate)){
        return 1
      } else{
        return 0
      }
    })

    this.setState({allJobs:listaOrdenada})
  }

  onChangeInputValorMaximo = (event) => {
    this.setState({filtroValorMaximo: event.target.value})
  }

  onChangeInputValorMinimo = (event) => {
    this.setState({filtroValorMinimo: event.target.value})
  }

  onChangeInputNome = (event) => {
    this.setState({filtroNome: event.target.value})
  }

  filtrarPorValor = () => {

    let listaJobsFiltrada = this.state.allJobs.filter((job) => {
      return ((Number(job.price) > Number(this.state.filtroValorMinimo)) && (Number(job.price) < Number(this.state.filtroValorMaximo)))
    })

    this.setState({allJobs: listaJobsFiltrada})
  }

  filtrarPorNome = () => {
    let listaJobsFiltradaNome = this.state.allJobs.filter((job) => {
      return (job.title.toUpperCase() === this.state.filtroNome.toUpperCase())
    })

    this.setState({allJobs: listaJobsFiltradaNome})
  }

  limparCarrinho = () => {
    this.setState({jobsCarrinho: []})
  }

  renderizaTela = () => {
    if (this.state.paginaHome){
      return(
        <Home
        onClickAnunciar={this.onClickAnunciar}
        onClickPesquisar={this.onClickPesquisar}
        />
      )
    } else if (this.state.paginaAnunciar){
      return(
        <Anunciar/>
      )
    } else if(this.state.paginaPesquisar){
      return(
        <Pesquisar
        onClickDetalhe={this.onClickDetalhe}
        allJobs={this.state.allJobs}
        onClickPrecoCrescente={this.onClickPrecoCrescente}
        onClickPrecoDecrescente ={this.onClickPrecoDecrescente }
        onClickNomeCrescente={this.onClickNomeCrescente}
        onClickNomeDecrescente={this.onClickNomeDecrescente}
        onClickPrazoCrescente={this.onClickPrazoCrescente}
        onClickPrazoDecrescente={this.onClickPrazoDecrescente}
        filtroValorMaximo={this.state.filtroValorMaximo}
        filtroValorMinimo={this.state.filtroValorMinimo}
        filtroNome={this.state.filtroNome}
        onChangeInputValorMaximo={this.onChangeInputValorMaximo}
        onChangeInputValorMinimo={this.onChangeInputValorMinimo}
        onChangeInputNome={this.onChangeInputNome}
        filtrarPorValor={this.filtrarPorValor}
        filtrarPorNome={this.filtrarPorNome}
        getAllJobs={this.getAllJobs}
        />
      )
    } else if (this.state.paginaDetalhe){
      return(
        <Detalhe
        jobDetalhe={this.state.jobDetalhe}
        onClickAdicionar={this.onClickAdicionar}
        />
      )
    } else if(this.state.paginaCarrinho){
      return(
        <Carrinho
        jobsCarrinho={this.state.jobsCarrinho}
        onClickExcluirCarrinho={this.onClickExcluirCarrinho}
        limparCarrinho={this.limparCarrinho}
        />
      )
    }
  }

  render() {
    return (
      <div>
        <GlobalStyle/>
        <Header
        onClickAnunciar={this.onClickAnunciar}
        onClickHome={this.onClickHome}
        onClickPesquisar={this.onClickPesquisar}
        onClickCarrinho={this.onClickCarrinho}
        jobsCarrinho={this.state.jobsCarrinho}
        />
        {this.renderizaTela()}
        <Footer/>
      </div>
    )
  }
}
