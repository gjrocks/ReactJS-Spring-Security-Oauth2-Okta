import React, { Component } from 'react';

const withHitCounter=(WrappedComponent)=>{

       
    class WithHitCounter extends Component {

        constructor(props){
            super(props);
            this.state={
                hitCounter:0
            }
    
            this.clbIncrementHitCounter=this.clbIncrementHitCounter .bind(this);
        }
        clbIncrementHitCounter(){
            this.setState(
                {hitCounter:++this.state.hitCounter}
            );
        }
        render() {
            return (
              
                    <WrappedComponent author="Ganesh Jadhav" 
                    count={this.state.hitCounter}
                     clbCount={this.clbIncrementHitCounter}
                      {...this.props} />
              
            );
        }
    }
    
   return WithHitCounter;
}

export default withHitCounter;