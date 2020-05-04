import React, { Component } from 'react';
import '../../App.css';
import withHitCounter from '../hocs/withHitCounter';
class Grocery extends Component {

   

    render() {
        return (
            <div className="grocery">
                <button onClick={this.props.clbCount}>Grocery</button>
                <br></br>
                Grocery Hit : {this.props.count}
                <br></br>
                Authot : {this.props.author}
            </div>
        );
    }
}

export default withHitCounter(Grocery);