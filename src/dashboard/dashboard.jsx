import React, { Component } from 'react'
import ApartamentosList from './apartamentos/apartamentosList';

class Dashboard extends Component {
     render() {
        return (
            <div className="container">
                <div className="inner cover">
                    <h1 className="cover-heading">Bem Vindo a Imobi Imobiliária</h1>
                    <p className="lead">Converse com o nosso assistente Imobi e escolha o apartamento ideal para você!</p>
                    <ApartamentosList />

                </div>
            </div>
        )
    }

}

export default Dashboard