import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RegistrationForm from './RegistrationForm.jsx';
import Registration from  './Registration.jsx';

const router=createBrowserRouter([
  { 
   path:'/',
   element:<App/>,
  },
  {
    path:'/registration',
    element:<Registration/>
  },
  {
    path:'/registerform',
    element:<RegistrationForm/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
   <RouterProvider router={router}/>
)

