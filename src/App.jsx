import './App.css'
import Home from './pages/home'
import Topnav from './components/Topnav'
import Uppernav from './components/Uppernav'


function App() {


  return (
    <>

      <div>
       <Uppernav/>
       <Topnav />
       <Home />
      </div>
    </>
  )
}

export default App
