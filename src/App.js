
import React, { useState } from 'react'
import Navbar from './component/nabvar/Navbar'
import Home from './component/home/Home'
import ExampleUseStateHooks from './ExampleUseStateHooks'
import MovieApp from './MovieApp'
import ExampleProps from './ExampleProps'
import CounterHeader from './CounterHeader'
import Textbox from './projectComponent/textbox/Textbox'
import PersistentDrawerLeft from './component/persistance Drawer/PersistanceDrawer'
import UsestateExample from './useEffect/UsestateExample'
import UseStateAPIFetch from './useEffect/UseStateAPIFetch'
import Error from './component/error/Error'
import Contact from './component/contact/Contact'
import Social from './component/contact/Social'
import Mail from './component/contact/Mail'
import UserDetails from './component/userdetials/Userdetails'
import UserefHookExample from './component/userefhook/UserefHookExample'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

import Login from './component/login/Login'








const App = () => {



  return (
    // <div>
    //   <PersistentDrawerLeft />
    //   {/* <Navbar /> */}
    //   <CounterHeader />
    //   <ExampleUseStateHooks />
    //   <MovieApp />
    //   < ExampleProps />
    //   < ProjectHeader />
    //   < Textbox />
    //   {/* <UsestateExample /> */}
    //   <UseStateAPIFetch />
    // </div>


    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userefhook" element={<UserefHookExample />} />
        <Route path="*" element={<Error />} />
        <Route path="/counterheader" element={<CounterHeader />} />
        <Route path="/exampleusestate" element={<ExampleUseStateHooks />} />
        <Route path="/movieapp" element={<MovieApp />} />
        <Route path="/exampleprops" element={< ExampleProps />} />
        <Route path="/todoproject" element={< Textbox />} />
        <Route path="/usestateapifetch" element={<UseStateAPIFetch />} />
        <Route path="/login" element={<Login />} />

        {/* Nested Route */}
        {/* <Route path="/contact" element={<Contact />} >
          <Route path="social" element={<Social />} />
          <Route path="mail" element={<Mail />} />
        </Route> */}

        {/* Index Routing */}
        <Route path="/contact" element={<Contact />} >
          <Route index element={<Mail />} />
          <Route path="social" element={<Social />} />
          <Route path="mail" element={<Mail />} />
        </Route>

        {/* Dynamic Routing */}
        <Route path="/userdetails" element={<UserDetails />} />
        <Route path="/userdetails/:userid" element={<UserDetails />} />

      </Routes>
    </Router >



  )
}

export default App
