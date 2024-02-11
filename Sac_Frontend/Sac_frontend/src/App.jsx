
import './App.css'
import Gallery from './Components/Gallery';
import AdminLogin from './Components/AdminLogin';
import Eventspage from './Components/Admin/Eventspage';
import Memberspage from './Components/Admin/Memberspage';
import Newspage from './Components/Admin/Newspage';
import Gallerypage from './Components/Admin/Gallerypage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserEvents from './Components/UserEvents';
import Usermembers from './Components/Usermembers';
import UserNews from './Components/UserNews';
import Landing from './Components/Landing'
import Dashbord from './Components/Admin/Dashbord';
import Adminregister from './Components/Admin/Adminregister'; 
import Footer from './Components/Footer';
function App() {


  return (
   <Router>
    <Routes>
      <Route path="/adminlogin" element={<AdminLogin/>}/>
      <Route path="/events" element={<UserEvents/>}/>
      <Route path="/members" element={<Usermembers/>}/>
      <Route path="/news" element={<UserNews/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/admin" element={<Dashbord/>}/>
      <Route path="/admin/events" element={<Eventspage/>}/>
      <Route path="/admin/members" element={<Memberspage/>}/>
      <Route path="/admin/news" element={<Newspage/>}/>
      <Route path="/admin/gallery" element={<Gallerypage/>}/>
      <Route path="/admin/register" element={<Adminregister/>}/>
      <Route path="/" element={<Landing/>}/>
    </Routes>
    <Footer/>
    </Router>
    
  )
}

export default App
