import React from 'react'
import { useDispatch,useSelector} from 'react-redux'
import { bindActionCreators } from 'redux';
import {actionCreators} from '../state/index.js'


const Shop = () => {
  const dispatch=useDispatch();
  const balance=useSelector(state=>state.amount);
  const {withdrawMoney,depositMoney}=bindActionCreators(actionCreators,dispatch);
  //destructure withdrawMoney and depositMoney from actionCreators which is taken by bindActionCreators as an parameter
  return (
    <div>
        <h2>Depost/Withdraw Money</h2>
      <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(50)}}>-</button>
      Updated Balance is  {balance}
      <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(50)}}>+</button>
    </div>
  )
}

export default Shop
