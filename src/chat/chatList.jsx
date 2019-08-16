import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {withRouter} from 'react-router-dom'
import { getMessages } from './chatActions'

class ChatList extends Component {

    constructor(props) {
        super(props)

        this.renderMessages = this.renderMessages.bind(this)
    }

    componentWillMount() {
        this.props.getMessages();
    }

    renderMessages() {
       
        let foi = true;

        const aux = this.props.messages || [];
        let list = []

        if (aux.length > 0) {

          if(aux[0].message == '')
            list = aux.slice(1);
          else 
            list = aux

            // if (aux[aux.length - 1].message == `Clique em 'Meu Apartamento' no canto superior para ver mais detalhes.`
            //  && this.props.location.pathname != '/apartamento' && aux[aux.length - 2].message != "Meu Apartamento" ) {
            //      this.props.history.push('/apartamento');
            //  }
            

            return list.map((item, index) => (
                
                <li key={index} className={`message ${item.base} appeared`}>
                    <div className="avatar"></div>
                    <div className="text_wrapper">
                        <div className="text">{item.message}</div>
                    </div>
                </li>
            )
            
            )
        }
        else {
            return (
                <li>

                </li>
            )
        }

    }

    render() {
        const messages = this.renderMessages()
        return (
            <ul className="messages">
                {messages}
            </ul>
        )
    }

    componentDidUpdate() {
        $('.messages').animate({ scrollTop: $('.messages').prop('scrollHeight') }, 300);
    }
}

const mapStateToProps = state => ({ messages: state.chat.messages })
const mapDispatchToProps = dispatch => bindActionCreators({ getMessages }, dispatch)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatList))