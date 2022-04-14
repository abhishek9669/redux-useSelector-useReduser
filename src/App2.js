import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeNametoAbhishek, changeNametoAbhishek2, changeNametoAbhishek3 } from './Actioncreate/Action';

export default function App2() {

    let data = useSelector((state)=>{
        return state;
      
      
    });
    let dispatch = useDispatch();
    console.log(data)
  return (
      <>
      <div>{data.name}</div>
        <button onClick={()=>{dispatch (changeNametoAbhishek())}}>click1</button>
 <button onClick={()=>{dispatch (changeNametoAbhishek2())}}>click2</button>
     <button onClick={()=>{dispatch (changeNametoAbhishek3())}}>click3</button>
      </>

    
  )
}
