import React, {useEffect, useState} from 'react'

const UseEffect = () => {

    const [clicked, setClicked] = useState();
    const [count, setCount] = useState(0);

    useEffect (() =>{
        //code to run after render or update
        console.log("We are using useEffect")

        //first return part will work then above console one
        return (()=>{
            console.log('return of use Effect')
        })
    },[clicked])


  return (
    <div>
      <button onClick={()=> setClicked('Subscribe')}>Subscribe</button>
      <br/><hr/>
      <button onClick={()=> setClicked('To')}>To</button>
      <br/><hr/>
      <button onClick={()=> setClicked('DropXOut')}>DropXOut</button>
      <h1>{clicked}</h1>

      <button onClick={()=> {setCount(count+1)}}>Increment</button>
      <h1>{count}</h1>
    </div>
  )
}

export default UseEffect
