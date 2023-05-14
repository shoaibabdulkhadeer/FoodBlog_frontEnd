import React from 'react'
import Signin from './components/Signin'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './components/Signup'

const App = () => {
    
  return (
       <div>

        <BrowserRouter >
         <Routes>
          <Route path='/' element={ <Signin />}/>
          <Route path='/signup' element={ <Signup /> }/>
         </Routes>
        
        </BrowserRouter>
            
       </div>
  )
}

export default App