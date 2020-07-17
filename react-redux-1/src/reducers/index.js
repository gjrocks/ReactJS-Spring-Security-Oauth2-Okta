const initialState={
    todos :[]
}

const todoReducer=(state=initialState,action) =>{
const newState={...state};
if(action.type==='ADD'){
    console.log('added');
 return {
     ...state,
     todos: state.todos.concat({id :Math.floor(Math.random() * 10000),todo:action.payload})
 }
}
if(action.type==='REMOVE'){
    console.log('REMOVEd');
 return {
     ...state,
     todos: state.todos.filter((el)=>el.id!==action.payload)
 }
}
return newState;
}

export default todoReducer;