import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom"; 

function Home() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:3000/users')    
                .then(res=>{
            setData(res.data)})
                .catch(err=>{
            console.log(err)});
    }, []);
    
    const handleDelete = id =>{
        alert("hi");
        const confirm=window.confirm("do you want to delete?");
        if(confirm){
            axios.delete('http://localhost:3000/users/' +id)
            .then(response => {
              console.log(response.data);
              window.location.reload();

            })
            .catch(error => {
              console.error(error);
            });
            
    }}
  return (
    
    <React.Fragment>
         <div className="table-responsive container">
                <h1 className="text-primary fw-bold text-center">LIST OF USERS</h1>
         <table className="table table-stripped table-hover table-border table-sm bg-warning">
            <thead>
                <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>PHONE</th>
                <th>WEBSITE</th>
                <th>ACTION 
                    <Link to='/create' className="ms-5">Add +</Link>
                </th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((data, index) =>(
                            <tr key={index} className="p-3 mb-3">
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.phone}</td>
                                <td>{data.website}</td>
                               <td>
                                
                                  <Link to={`/read/${data.id}`} className="btn btn-sm btn-danger me-2">READ</Link>
                                  <Link to={`/update/${data.id}`} className="btn btn-sm btn-primary me-2 ">EDIT</Link>
                                  <button onClick={e=>{handleDelete(data.id)}}className="btn btn-sm btn-danger">DELETE</button></td>
                             </tr>
                    ))
                }
            </tbody>        

         </table>
                </div>
          
    </React.Fragment>
 
  )
}

export default Home;
