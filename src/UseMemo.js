import React, { useState , useMemo} from 'react'

const UseMemo = () => {

    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');

    function handleInput(e){
        setInput(e.target.value);
    }

  //useMemo return the value while useEffect returns the funtion
  const result = useMemo(function slowFunction(){
    let sum =0;
    for (let i=0;i<=110000000;i++){
      sum+=i;
    }
    console.log("Hello I am slow function");
    return sum;
  },[count]);


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <br/><hr/>
      <label>
        Input:
        <input type='number' value={input} onChange={handleInput}></input>
      </label>
      <br/><hr/>
      <h1>{result}</h1>
    </div>
  )
}

export default UseMemo
