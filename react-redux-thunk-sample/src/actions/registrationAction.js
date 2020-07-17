export const register=(payload)=>{
    return {
        type:"register"
    }
}
export const unregister=(payload)=>{
    return {
        type:"unregister"
    }
}


export const aSyncregister=(payload)=>{
    return function(dispatch){
        setTimeout(()=>{
            dispatch(
                {
                    type:"hide"
                }
            );
            dispatch(register());
        },2000);
    }
}