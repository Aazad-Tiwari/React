import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import {Contact, About, Home,User,Github,githubInfoLoader } from './components'


// const router = createBrowserRouter ( [

//   {
//     path: '/',
//     element : <Layout/>,
//     children : [
//        { path: "" , element : <Home/>  },
//        { path: "about", element: <About/> } ,
//        { path: "contact", element: <Contact/> } ,
//     ]
//   }

// ] )

const router = createBrowserRouter( 
  createRoutesFromElements( 
    <Route path='/' element={<Layout/>} >
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='' element={<Home/>} />
      <Route path='user/:userid' element={<User/>} />

      <Route 
      loader={githubInfoLoader}       // so jab hum loader ka use krte hai to hume page pe visit krne k baad jo api calling hoti hai vo link ya navlink pe hover krte hi load ho jayega yaani useeffect se bhi pehle
      path='github' 
      element={<Github/>} />
    </Route>
  )
 )


createRoot(document.getElementById('root')).render(
  <StrictMode>

  <RouterProvider router={router} />

  </StrictMode>,
)
