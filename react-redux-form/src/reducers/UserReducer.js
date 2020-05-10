const intiatialState={
    data :{lastName:"jadhav"}
}

const userReducer =(state=intiatialState,actions) =>{
    const newState={...state};
    if(actions.type==='SAVE_USER'){
        console.log("payload SAVE_USER ",actions.data);
     return {
         data :{...actions.data,message:"ganesh ki jai"}

     }
    }

    return newState;


}

export default userReducer;