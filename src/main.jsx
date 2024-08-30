import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import LoginPage from './pages/login.jsx'
import RegisterPage from './pages/register.jsx'
import ErrorPage from './pages/404.jsx'
import ProductPage from './pages/product.jsx'
import EventReactClass from './Belajar/ClassEvent.jsx'
import ExampleClass from './Belajar/Example.jsx'
import BindingEventClass from './Belajar/BindingEvent.jsx'
import EventClassPractice from './Belajar/Event.jsx'
import State from './Belajar/State.jsx'
import ClassState from './Belajar/ClassState.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element : <div>Hello StudentX</div>,
    errorElement: <ErrorPage/>
  }, 
  {
    path : "/login",
    element : <LoginPage/>
  }, 
  {
    path : "/register",
    element : <RegisterPage/>
  },
  {
    path : '/product',
    element: <ProductPage/>
  }, 
  {
    path: '/eventclass',
    element:<EventReactClass/>
  },
  {
    path : '/example',
    element: <ExampleClass/>
  },
  {
    path: '/bindingevent',
    element: <BindingEventClass/>
  },
  {
    path : '/event',
    element: <EventClassPractice/>
  }, 
  {
    path: '/useState',
    element : <State/>
  }, 
  {
    path: '/classState',
    element : <ClassState/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
