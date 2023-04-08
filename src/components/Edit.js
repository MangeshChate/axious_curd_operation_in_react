import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate,Link} from 'react-router-dom'
export default function Edit() {

    const [id , setId] = useState(0);
    const [name , setName] = useState('');
    const [age , setAge] = useState('');
    const [email , setEmail] = useState('');

    useEffect(()=>{
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setAge(localStorage.getItem('age'));
        setEmail(localStorage.getItem('email'));

    },[])

    const navigate = useNavigate();
    const handleUpdate = (e)=>{
        e.preventDefault();
        axios.put(`https://64314645d4518cfb0e5deb4c.mockapi.io/curd/${id}`,{
            e_name:name,
            e_age:age,
            e_email:email
        })
        .then(()=>{
            navigate('/');
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
   
        <>
        <div className="row m-4">
            <div className="col-md-4">
        <div className='container mb-2 mt-2'>
            <Link to="/">
                <button className="btn btn-primary">Read Data</button>
            </Link>
        </div>
            <div className="bg-primary p-4 text-center">
                <h1 >Update Data</h1>
            </div>
                <form onSubmit={handleUpdate}>
                    <div className="form-group">
                        <label htmlFor="">Enter Name:</label>
                        <input type="text" className='form-control' value={name} onChange={(e)=>setName(e.target.value)}placeholder='Name'  required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Enter Age:</label>
                        <input type="number" className='form-control'value={age} onChange={(e)=>setName(e.target.value)} placeholder='Age' required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Enter Email:</label>
                        <input type="email" className='form-control'value={email} onChange={(e)=>setName(e.target.value)} placeholder='email'  required />
                    </div>
                    <div className="d-grid">

                    <button type="submit"  className="btn  btn-primary mt-4">Update</button>
                    </div>
                </form>
                
            </div>
        </div>
    </>
    
  )
}
