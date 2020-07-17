import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

class Header extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        // console.log("yu: ",this.props.loginHandler);
        return (
            <div>
                <ul>
                    <li> <Link to="/" className="navbar-brand"> Home</Link></li>
                    <li><Link to="/users/ganesh" className="nav-link"> Ganesh</Link></li>
                    <li><Link to="/users/gru" className="nav-link"> Gru</Link></li>
                    <li><Link to="/users/bob" className="nav-link"> Bob</Link></li>
                    <li><Link to="/users/kevin" className="nav-link"> Kevin</Link></li>
                </ul>
            </div>
        );
    }
}

export default Header;
