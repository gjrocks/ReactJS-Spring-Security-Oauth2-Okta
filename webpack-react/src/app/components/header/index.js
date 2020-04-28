import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import AuthService from '../../services/AuthService';
class Header extends Component {

    constructor(props) {
        super(props);
    }
    render() {
       // console.log("yu: ",this.props.loginHandler);
        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#e3f2fd" }}>

                    <Link to="/" className="navbar-brand"> Bank</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
              
                                <Link  to={AuthService.getLoggedIn() ? "/account" :"#" } className="nav-link"> Account <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/balance" className="nav-link"> Balance</Link>
                            </li>
                            <li className="nav-item"> 
                                <Link to="/cards" className="nav-link"> Cards</Link>
                            </li>

                            <li className="nav-item">
                            <div className="btnSpace"><button type="button" className="btn btn-primary" onClick={this.props.loginHandler}>Login</button></div>
                            </li>
                            <li className="nav-item">
                            <div className="btnSpace"><button type="button" className="btn btn-primary" onClick={this.props.logoutHandler}>Logout</button></div>
                            </li>

                        </ul>

                    </div>
                </nav>



            </div>
        );
    }
}

export default Header;
