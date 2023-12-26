import React,{useState, useContext} from 'react'
import UserContext from '../Context/UserContext'



function Login() {
    const [Username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({Username, password})
    }
  return (
    <>
     <input
     type='text'
     placeholder='UserName'
     value={Username}
     onChange={(e) => setUsername(e.target.value)}
     >
     </input>   
     <input
     type='text'
     placeholder='Password'
     value={password}
     onChange={(e) => setPassword(e.target.value)}
     >
     </input>   
     <button
     onClick={handleSubmit}
     >Submit</button>
    </>
  )
}

export default Login