export const depositMoney=(amount)=>{
    return (dispatch)=>{ //depositMoney returns the arrow function and that arrow function takes another function dispatch() 
        // and calls that dispatch function with type and payload(that is amount that want to deposit)
       dispatch({
        type:'deposit',
        payload:amount
       })
    }

}

export const withdrawMoney=(amount)=>{
    return (dispatch)=>{ //withdrawMoney returns the arrow function and that arrow function takes another function dispatch() 
        // and calls that dispatch function with type and payload(that is amount that want to withdraw)
       dispatch({
        type:'withdraw',
        payload:amount
       })
    }
}