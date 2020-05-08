import React, {Component} from 'react';

class Account extends Component {
 
constructor(props){
  super(props);
  this.state={
    list:[]
  }
  this.getData=this.getData.bind(this);
}
async componentDidMount(){
  console.log("i am called");
  const retData=this.getData("/api/getList");
  //console.log(retData);
  retData.then(data=>console.log(data)).catch(err=>console.log(err));
}


async  getData(url = '') {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
   
  });
  const datar=await response.json();
 // console.log(datar);
  return datar; // parses JSON response into native JavaScript objects
}
render(){
  return (
    <div>
     Account
    </div>
  );
}
}

export default Account;

