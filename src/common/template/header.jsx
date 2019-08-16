import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="masthead clearfix">
                    <div className="inner">
                        <h3 className="masthead-brand">Imobi Apartamentos</h3>
                        <nav>
                            <ul className="nav masthead-nav">
                                <li>
                                    <Link to={'/'}>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/apartamento'}>
                                        Meu Apartamento
                                    </Link>
                                </li>

                            </ul>
                        </nav>
                    </div>
                </div>
                {this.props.children}
            </div>
        )
    }
}
export default withRouter(Header)