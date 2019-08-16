import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import consts from './../../main/consts'

import { obterApartamentos } from './apartamentosAction'
import { sendMessage } from './../../chat/chatActions'

class ApartamentosList extends React.Component {

    componentWillMount() {
        if (!localStorage.getItem(consts.USER_SESSION))
            this.props.sendMessage()

        this.props.obterApartamentos()
    }

    renderCards() {
        const list = this.props.list || []
        return list.map(apto => (
            <div key={apto._id} className="col col-4 p2">
                <div className="card">
                    <img className="card-img-top" src={apto.imgUrl} alt="Card image cap" height="286" />
                    <div className="card-body">
                        <h3 className="card-title"><b onClick={() => this.props.sendMessage(apto.codigo)}>Código: {apto.codigo}</b></h3>
                        <p>{apto.description}</p>
                    </div>
                </div>
            </div>

        ))
    }

    render() {
        return (
            <div className="row">
                {this.renderCards()}
            </div>
        )
    }

}

const mapStateToProps = state => ({ list: state.apartamentos.list })
const mapDispatchToProps = dispatch =>
    bindActionCreators({ obterApartamentos, sendMessage }, dispatch)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ApartamentosList))