import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route , Routes} from 'react-router-dom'
import Home from './pages/Home'
import Upload from './pages/Upload'
import Header from './components/Header'
import "core-js/stable"
import "regenerator-runtime/runtime"
import './App.css'

const App = () => {
  
  return (
    <HashRouter>
      <Header />
     <Routes>
     <Route path='/upload' component={Upload}></Route>
     <Route path='/' component={Home}></Route>
      </Routes>
  </HashRouter>
  )
}

export default App

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
