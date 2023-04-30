import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './assets/Home';
import Create from './assets/Create';
import Update from './assets/Update';
import Read from './assets/Read';

function App() {

    return ( 
      
      <React.Fragment>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/create' element={<Create />}/>
        <Route path='/update/:id' element={<Update />}/>
        <Route path='/read/:id' element={<Read />}/>
      </Routes>
      </React.Fragment>
      
      
     
    )
}

export default App;