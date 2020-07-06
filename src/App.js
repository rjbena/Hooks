import React, {useState} from 'react';
import { useForm } from './useForm';



const App = () => {
 const [{count, count2},setCount] =useState({count:10, count2: 20})
 const [email,setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [values, handleChange]= useForm({email:'' ,password:''})
 return (
   <div>
     <button onClick={()=>
     setCount(currentState => ({...currentState,count :currentState.count + 1
     }))
     }>
      +
     </button>
     <input
      name='email'
      value={values.email}
      onChange={handleChange}

     />
     <input type='password' name='password' value={values.password} onChange={handleChange}/>
   </div>
 )
}

export default App;
