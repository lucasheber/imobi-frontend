import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import {withRouter} from 'react-router-dom'
import { changeMessage, sendMessage } from './chatActions'

class ChatSend extends Component {

    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    keyHandler(e) {
        const { message, sendMessage } = this.props;
        if (e.key === 'Enter' && message != '') {
            sendMessage(message);
        }
    }

    render() {
        const { message, changeMessage, sendMessage } = this.props;
        return (
            <div className="bottom_wrapper clearfix">
                <div className="message_input_wrapper">
                    <input className="message_input" placeholder="Digite sua mensagem aqui..." onKeyUp={this.keyHandler} onChange={changeMessage} value={message}/>
                </div>
                <div className="send_message" onClick={() => sendMessage(message)}>
                    <div className="icon"></div>
                    <div className="text">Enviar</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ message: state.chat.message })
const mapDispatchToProps = dispatch => bindActionCreators({ changeMessage, sendMessage }, dispatch)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatSend))