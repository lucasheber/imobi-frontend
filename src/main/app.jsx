import '../common/template/dependencies'
import '../common/template/footer'
import Header from '../common/template/header';
import Footer from './../common/template/footer'

import React from 'react'
import Routes from './routes'
import Chat from '../chat/chat'

export default props => (
    <div>
        <div className="cover-container">
            <Header />
            <Routes />
            <Footer nome="@lucasheber"/>
        </div>
        <Chat />
    </div>
)