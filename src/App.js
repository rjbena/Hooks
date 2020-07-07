import React, { useState, useEffect, useRef } from 'react';
import { useForm } from './useForm';
import { useFetch } from './useFetch';
import { Hello } from './Hello';



const App = () => {

  const [values, handleChange] = useForm({ email: '', password: '' })
  const [count, setCount] = useState(() => JSON.parse(localStorage.getItem('count')));
  const { data, loading } = useFetch(`http://numberapi.com/${count}/trivia`)
  const inputRef = useRef();
  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count])
 const hello =useRef(()=>{
   console.log('hello')
 })
  return (
    <div>

      <div>
        {loading ? 'loading...' : data}
      </div>
      <Hello/>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>button</button>

      <input
        name='email'
        value={values.email}
        onChange={handleChange}
        ref={inputRef}
        placeholder='email'
      />
      <input type='password' name='password' value={values.password} onChange={handleChange} />
      <button onClick={()=> {
        inputRef.current.focus();
        hello.current()
      }}>focus</button>
    </div>
  )
}

export default App;
