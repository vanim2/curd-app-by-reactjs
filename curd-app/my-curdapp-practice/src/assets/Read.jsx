import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Read() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  // calling api
  useEffect(() => {
    axios
      .get('http://localhost:3001/users/' + id)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <React.Fragment>
      <section className="d-flex justify-content-center align-items-center vh-100 vw-100">
        <div className="container p-5 bg-light rounded shadow w-50">
          <div className="row text-center">
            <div className="col">
              <h1 className="text-primary fw-bold">Details of User</h1>

              <div className="mb-2">
                <strong>Name: {data.name}</strong>
              </div>
              <div className="mb-2">
                <strong>Email: {data.email}</strong>
              </div>
              <div className="mb-2">
                <strong>Phone: {data.phone}</strong>
              </div>
              <div className="mb-4">
                <strong>Website: {data.website}</strong>
              </div>
              <Link
                to={`/update/${data.id}`}
                className="btn btn-sm btn-primary me-4"
              >
                EDIT
              </Link>
              <Link
                to={`/update/${data.id}`}
                className="btn btn-sm btn-primary me-2"
              >
                DELETE
              </Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Read;
