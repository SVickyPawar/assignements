import React, { useState } from 'react'

const Login = () => {
    const [form,setForm] = useState({
        username:'',
        password:''
    })
    const handleChange = (e) => {
        const  {value,name} = e.target;
        setForm({...form,
            [name] : value})
    };
  return (
    <div>
        <h2>Login</h2>
        <form>
            <input type="text" placeholder='Enter Username' onChange={handleChange} name="username" value={form.username} />
            <input type="password" placeholder='Enter Password' onChange={handleChange} name="password" value={form.password} />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Login