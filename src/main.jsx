import 'raboni-styles/scss/main.scss'
import './sass/main.scss'
import './assets/icons/_icons.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

//Redux
import {Provider} from 'react-redux';
import {store} from './store.js';

//pages
import App from './App.jsx'
import NotFound from './pages/404/NotFound.jsx'
import Login from './pages/Auth/Login.jsx'
import Register from './pages/Auth/Register.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Services from './pages/Services/Services.jsx'

import Specialist from './pages/Specialists/SpecialistList.jsx'
import SpecialistRegister from './pages/Specialists/Specialist.jsx'
import SpecialistUpdate from './pages/Specialists/SpecialistEdit.jsx'

import Clients from './pages/Clients/ClientList.jsx'
import ClientRegister from './pages/Clients/Client.jsx'
import ClientUpdate from './pages/Clients/ClientEdit.jsx'

//redirect routes
import PublicRoute from './components/PublicRoute.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <ProtectedRoute><App/></ProtectedRoute>,
    errorElement: <Navigate to="/notfound" replace />,
    children: [
      { path: '', element: <Navigate to="/dashboard" replace /> },
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/services', element: <Services /> },
      
      //Especialists
      { path: '/specialists', element: <Specialist /> },
      { path: '/specialist-register', element: <SpecialistRegister /> },
      { path: '/specialist-update', element: <SpecialistUpdate /> },
      //Clients
      { path: '/clients', element: <Clients /> },
      { path: '/client-register', element: <ClientRegister /> },
      { path: '/client-edit', element: <ClientUpdate /> },

      { path: '/notfound', element: <NotFound /> },
    ],
  },
  {
    path:"/login",
    element: (<PublicRoute><Login/></PublicRoute>)
  },
  {
    path:"/register",
    element: (<PublicRoute><Register/></PublicRoute>)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)