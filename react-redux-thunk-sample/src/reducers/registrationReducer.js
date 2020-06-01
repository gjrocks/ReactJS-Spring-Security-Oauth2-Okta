const initialState={
    count:0
}

const registrationReducer=(state=initialState,actions)=>{
  let newState={...state};
   if(actions.type==="register"){
       newState={count:++newState.count};
   }
   if(actions.type==="unregister"){
    newState={count:--newState.count};
}
  return newState;
}


export default registrationReducer;