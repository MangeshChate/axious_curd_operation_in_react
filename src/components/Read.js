import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

export default function Read() {

    const [apiData , setApiData] = useState([])
    function getData(){
        axios.get('https://64314645d4518cfb0e5deb4c.mockapi.io/curd')
        .then((responce)=>{
           setApiData(responce.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    function handleDelete(id){
        axios.delete(`https://64314645d4518cfb0e5deb4c.mockapi.io/curd/${id}`)
        .then(()=>{
            getData();
        })
        .catch((err)=>{
            console.log(err)
        });
    }
    function setDataToStorage(id ,name , age , email){
        localStorage.setItem('id' ,id);
        localStorage.setItem('name' ,name);
        localStorage.setItem('age' ,age);
        localStorage.setItem('email' , email);

    }


    useEffect(()=>{        
        getData();
    },[])

    


  return (
   <>
    <div className="row">
        <div className="col-md-12">
            <div className='container mb-2 mt-2'>
            <Link to="/create">
                <button className="btn btn-primary">Create New Data</button>

            </Link>
            </div>
            <table className='table table-bordered table-striped table-dark table-hover'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>delete</th>


                    </tr>
                </thead>
                <tbody>
                {
                    apiData.map((item)=>{
                        return(

                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.e_name}</td>
                        <td>{item.e_age}</td>
                        <td>{item.e_email}</td>
                        <td  >
                            <Link to="/edit">
                            <button className="btn btn-success" onClick={()=> setDataToStorage(item.id , item.e_name , item.e_age , item.e_email)}>EDIT</button>
                            </Link>
                        </td>
                        <td ><button className="btn btn-danger" onClick={()=>{if(window.confirm('Are You Sure Delete Data ? ')){handleDelete(item.id)}}}>Delete</button></td>

                    </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    </div>
   </>
  )
}
