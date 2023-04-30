import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, } from "react";
import axios from "axios";

function Create() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        website: ''
    })
    const navigate=useNavigate();

    const userSubmit = (e) => {
        // alert("hiii");
        e.preventDefault();
        axios.post('http://localhost:3001/users', values).then((res) => {
            console.log(res);
            navigate('/')

        }).catch((err) => {
            console.log(err);
        });
    }
    return (
        <React.Fragment>
            <div className="container">
                <div className="row shadow p-3 mb-5 bg-white rounded d-flex flex-coloumn align-items-center justify-content-center mt-5 vh-50">
                    <div className="col-md-6">
                        <h2 className="fw-bold text-center text-primary">Add a user</h2>
                        <form onSubmit={userSubmit}>
                            <div className="form-group mb-3">
                                <label htmlFor="nameInput">:Name</label>
                                <input type="text" name="name" required className="form-control" id="nameInput" placeholder="Enter your name"
                                    onChange={e => setValues({ ...values, name: e.target.value })} />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="email">:Email</label>
                                <input type="email" name="email" required className="form-control" id="email" placeholder="Enter your email"
                                    onChange={e => setValues({ ...values, email: e.target.value })} />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="messageInput">:Phone</label>
                                <input type="text" name="phone" required className="form-control" id="emailInput" placeholder="Enter your phone"
                                    onChange={e => setValues({ ...values, phone: e.target.value })} />
                            </div>
                            <div className="form-group mb-5">
                                <label htmlFor="website">:website</label>
                                <input type="text" name="website" required className="form-control" id="website" placeholder="Enter your website"
                                    onChange={e => setValues({ ...values, website: e.target.value })} />
                            </div>
                            <div className=" d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary rounded me-3">Submit</button>
                            <Link to='/' className="btn btn-success rounded">Back</Link>
                            </div>

                        </form>

                    </div>
                </div>
            </div>

        </React.Fragment>

    )
}

export default Create;
