import React, { Component } from 'react';
import '../../App.css';
import withHitCounter from '../hocs/withHitCounter';
class Toys extends Component {
  

    render() {
        return (
            <div className="grocery">
                <button onClick={this.props.clbCount}>Toys</button>
                <br></br>
                Toys Hit : {this.props.count}
            </div>
        );
    }
}

export default withHitCounter(Toys);