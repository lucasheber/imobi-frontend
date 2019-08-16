import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { sendMessage } from './../../chat/chatActions'
import { getCart } from './../../chat/chatActions'

class MeuApartamento extends Component {

    componentDidMount() {
        // this.props.sendMessage("Meu Apartamento")
    }

    renderTable() {
        const list = this.props.cart || [];

        return (
            <tbody>
                <tr>
                    <td>Código</td>
                    <td>{list.codigo}.00</td>
                </tr>
                <tr>
                    <td>Valor</td>
                    <td>R$ {list.value}</td>
                </tr>
                <tr>
                    <td>Endereço</td>
                    <td>{list.address}</td>
                </tr>
                <tr>
                    <td>Cidade</td>
                    <td>{list.city}</td>
                </tr>
                <tr>
                    <td>Tipo Imóvel</td>
                    <td>{list.type}</td>
                </tr>
            </tbody>
        )
    }
    renderCart() {
        const list = this.props.cart || [];
        console.log(list);

        return (
            <div key={list._id} className="pt-5 mt-5">
                <div className="row">
                    <div className="col mt-3">
                        <h1 className="text-center mt-5">Veja abaixo os detalhes do apartamento ecolhido!</h1>
                        <h4 className="text-center mt-5">Entre em contato com nossa loja informando o código do imóvel</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-4 offset-4 pt-5">
                        <div className="col">
                            <img src={list.imgUrl} alt="Image Apartamento" height="286" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col col-4 offset-4 pt-5">
                        <h4>Descrição: </h4>
                        <p className="text-justify pt-2 pb-5">
                            {list.description}
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col col-4 offset-4">
                        <table className="table table-striped text-left">
                            <thead>
                                <tr>
                                    <th className="text-center">Campo</th>
                                    <th className="text-center">Descrição</th>
                                </tr>
                            </thead>

                            {this.renderTable()}

                        </table>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderCart()}
            </div>
        )
    }

}

const mapStateToProps = state => ({ cart: state.chat.cart })
const mapDispatchToProps = dispatch => bindActionCreators({ getCart, sendMessage }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(MeuApartamento)