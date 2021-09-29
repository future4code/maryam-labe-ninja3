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
    allJobs: [],
    jobDetalhe: []
  }

  componentDidMount = () => {
    this.getAllJobs()
  }

  getAllJobs = () => {
    Axios.get('https://labeninjas.herokuapp.com/jobs', headers)
    .then((res) => {
      this.setState({allJobs: res.data.jobs})
    })
    .catch((err) => {
      alert(err.response.data.error)
    })
  }

  onClickAnunciar = () => {
    this.setState({paginaAnunciar: true})
    this.setState({paginaDetalhe: false})
    this.setState({paginaHome: false})
    this.setState({paginaPesquisar: false})
  }

  onClickHome = () => {
    this.setState({paginaHome: true})
    this.setState({paginaAnunciar: false})
    this.setState({paginaDetalhe: false})
    this.setState({paginaPesquisar: false})
  }

  onClickPesquisar = () => {
    this.setState({paginaPesquisar: true})
    this.setState({paginaHome: false})
    this.setState({paginaAnunciar: false})
    this.setState({paginaDetalhe: false})

    this.getAllJobs()
  }

  onClickDetalhe = (job) => {
    this.setState({paginaDetalhe: true})
    this.setState({paginaPesquisar: false})
    this.setState({paginaHome: false})
    this.setState({paginaAnunciar: false})
    this.setState({jobDetalhe: job})
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
        />
      )
    } else if (this.state.paginaDetalhe){
      return(
        <Detalhe
        jobDetalhe={this.state.jobDetalhe}
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
        />
        {this.renderizaTela()}
        <Footer/>
      </div>
    )
  }
}
