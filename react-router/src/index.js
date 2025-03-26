import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// importing to create routers
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import User from './components/User/User';
import Github, { githubInfoLoader } from './components/Github/Github';

// creating routers

// const router = createBrowserRouter([{
//   path: '/',
//   element: <Layout/>,
//   children: [
//     {
//     path: '',
//     element: <Home/>
//   },
//   {
//     path: '/about',
//     element: <About/>
//   },
//   {
//     path: '/contact',
//     element: <Contact/>
//   }
// ]
// }])

// alternative way to create routers

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      {/* user link with id. the user can give the id in the url and that will be fetch*/}
      <Route path='user/:userid' element={<User/>}/> 
      <Route path='github' element={<Github/>} loader={githubInfoLoader}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* instead of rendering app.js rendering routers  */}
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
