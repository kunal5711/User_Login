import React, { useState } from 'react'
import { BrowserRouter ,Routes ,Route } from "react-router-dom";
import MainLayout from './Components/MainLayout';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import Logout from './Components/Logout';

const App = () => {
  const [data , setData] = useState();
  return (
    <div>
      <BrowserRouter>
      {JSON.stringify(data)}

        <Routes>
          <Route path='/' element= {<MainLayout />} >
            <Route path='/login' element= {<Login regLogin={data}/>} />
            <Route path='/register' element= {<Register regData={setData}/>}/>
          </Route>
          <Route path='/dashboard' element= {<Dashboard regDash={data}/>}/>
          <Route path='/logout' element= {<Logout regLog= {setData} />}/>

        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App