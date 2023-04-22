
import React from 'react'
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

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"


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
        <Route path="*" element={<Error />} />
        <Route path="/counterheader" element={<CounterHeader />} />
        <Route path="/exampleusestate" element={<ExampleUseStateHooks />} />
        <Route path="/movieapp" element={<MovieApp />} />
        <Route path="/exampleprops" element={< ExampleProps />} />
        <Route path="/todoproject" element={< Textbox />} />
        <Route path="/usestateapifetch" element={<UseStateAPIFetch />} />

      </Routes>

    </Router>





  )
}

export default App