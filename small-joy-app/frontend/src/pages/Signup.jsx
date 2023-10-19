import React,{useState} from 'react'

const Signup = () => {
    const [form,setForm] = useState({
        name:'',
        email:'',
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
         <h2>SignUp</h2>
        <form>
            <input type="text" placeholder='Enter Name' onChange={handleChange} name="name" value={form.name}/>
            <input type="email" placeholder='Enter Email' onChange={handleChange} name="email" value={form.email}/>
            <input type="text" placeholder='Enter Username' onChange={handleChange} name="username" value={form.username}/>
            <input type="password" placeholder='Enter Password' onChange={handleChange} name="password" value={form.password}/>
            <input type="submit" />
        </form>
    </div>
  )
}

export default Signup