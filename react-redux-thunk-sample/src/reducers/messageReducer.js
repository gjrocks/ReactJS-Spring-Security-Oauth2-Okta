const initinalState={
    message:""
}

const messageReducer=(state=initinalState,actions)=>{
   let newState={...state};
   if(actions.type==="show"){
       newState={message:"Loading..."}
   }
   if(actions.type==="hide"){
    newState={message:""}
}
   return newState;
}

export default messageReducer;