const reducer=(state=0,action)=>{//reducer takes state and action as parameters , if state is not passed then by 
    //default state will be 0 action here means withdraw or deposit the money 
    if (action.type==='deposit'){
        return state + action.payload;
    }
    else if(action.type==='withdraw'){
        return state - action.payload;
    }
    else{
        return state;
    }

}
export default reducer;