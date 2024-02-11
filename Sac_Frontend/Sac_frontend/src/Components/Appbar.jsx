import { useNavigate } from "react-router-dom"
export default function Appbar(){
  const navigate=useNavigate();
  function handleAdminLogin(){
    navigate('/adminlogin');
  }
  function handleHome(){
    navigate('/');
  }
  function handleEvent(){
    navigate('/events');
  }function handleGallery(){
    navigate('/gallery'); 
  }function handleMembers(){
    navigate('/members'); 
  }function handleNews(){
    navigate('/news'); 
  }
  return <>
    <nav>
      <div className=" flex w-full bg-red-500 p-3 mb-3.5">
        <div className='w-1/3 p-2'>
          <button onClick={handleHome}><a className="text-white text-4xl font-bold">SAC</a></button>
        </div>
        <div className=' flex w-1/3 justify-evenly p-2'>
          <button onClick={handleHome}><a className="text-white ">Home</a></button>
          <button onClick={handleEvent}><a className="text-white ">Event</a></button>
          <button onClick={handleGallery}><a className="text-white ">Gallery</a></button>
          <button onClick={handleMembers}><a className="text-white ">Members</a></button>
          <button onClick={handleNews}><a className="text-white ">News</a></button>
        </div>
        <div className=' flex w-1/3 p-2 justify-end'>
        <button onClick={handleAdminLogin}><a className="text-white ">Admin Login</a></button>

        </div>
      </div>
    </nav>

  </>
}
