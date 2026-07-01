
import { ToastContainer } from 'react-toastify'
import './App.css'
// import Navbar from './components/layout/Navbar'
import Public from './routes/Public'

function App() {

  return (
    <>
     <div>
     {/* <Navbar/> */}
      <ToastContainer position="top-right" autoClose={3000} />
     <Public/>
     </div>
    </>
  )
}

export default App
