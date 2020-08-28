const INITIAL_STATE={
    username:"unknown",
    email:""
}
defaultReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case "SaveEmail": state={...state,...action.data}
    
    }
    return state;
}

export default defaultReducer;