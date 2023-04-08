import React, { useState } from 'react'
import axiox from 'axios'
import { useNavigate ,Link} from 'react-router-dom';



export default function Create() {
         
    const [name , setName] = useState('');
    const [age , setAge] = useState('');
    const [email , setEmail] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        axiox.post('https://64314645d4518cfb0e5deb4c.mockapi.io/curd',{
            e_name: name ,
            e_age: age,
            e_email: email
        }).then(()=>{
            navigate('/');
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
                <h1 >Create Data</h1>
            </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Enter Name:</label>
                        <input type="text" className='form-control' placeholder='Name' onChange={(e)=> setName(e.target.value)} required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Enter Age:</label>
                        <input type="number" className='form-control' placeholder='Age' onChange={(e)=>setAge(e.target.value)} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Enter Email:</label>
                        <input type="email" className='form-control' placeholder='email' onChange={(e)=>setEmail(e.target.value)} required />
                    </div>
                    <div className="d-grid">

                    <button type="submit" className="btn  btn-primary mt-4">submit</button>
                    </div>
                </form>
                
            </div>
        </div>
    </>
  )
}
