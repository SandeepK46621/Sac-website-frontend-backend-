import { useNavigate } from "react-router-dom"
export default function Adminbar(){
  const navigate=useNavigate();
  function handleAdminregister(){
    navigate('/admin/register');
  }
  function handleDashbord(){
    navigate('/admin');
  }
  function handleEvent(){
    navigate('/admin/events');
  }function handleGallery(){
    navigate("/admin/gallery"); 
  }function handleMembers(){
    navigate("/admin/members"); 
  }function handleNews(){
    navigate("/admin/news"); 
  }function logout(){
    localStorage.removeItem('token');
    navigate('/');
  }
  return <>
    <nav>
      <div className=" flex w-full bg-red-500 p-3 mb-3.5">
        <div className='w-1/3 p-2'>
          <button onClick={handleDashbord}><a className="text-white text-4xl font-bold">ADMIN</a></button>
        </div>
        <div className=' flex w-1/3 justify-evenly p-2'>
          <button onClick={handleDashbord}><a className="text-white ">Dashbord</a></button>
          <button onClick={handleEvent}><a className="text-white ">Event</a></button>
          <button onClick={handleGallery}><a className="text-white ">Gallery</a></button>
          <button onClick={handleMembers}><a className="text-white ">Members</a></button>
          <button onClick={handleNews}><a className="text-white ">News</a></button>
          <button onClick={handleAdminregister}><a className="text-white ">New Admin</a></button>
        </div>
        <div className=' flex w-1/3 p-2 justify-end'>
        <button onClick={logout}><a className="text-white ">Logout</a></button>

        </div>
      </div>
    </nav>

  </>
}
