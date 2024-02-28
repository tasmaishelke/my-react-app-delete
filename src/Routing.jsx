import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Registration from './pages/Registration'
import { Route, Routes} from 'react-router-dom'


function Routing()
{
    return(
        <div className="container">
          <Routes>            
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Registration" element={<Registration />} />
          </Routes>
        </div>
    )
}

export default Routing