import {useState,useEffect} from 'react';
import axios from 'axios';
import Eventedit from './Eventedit';
import Adminbar from './Adminbar';
 
export default function Eventspage() {
    async function getEvents() {
        try {
          const response = await fetch('http://localhost:3000/events');
          if (!response.ok) {
            alert('Error fetching events')
          }
          const data = await response.json();
          setEvents(data);
        } catch (error) {
          console.error('Error fetching events:', error);
        }
      }
      
      
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const [imagelink,setImagelink]=useState("");
    const [events,setEvents]=useState([]);
    useEffect(()=>{
        getEvents();
    },[]);

    const handleAdd = async () => {
        try {
            const token = localStorage.getItem('token');

            const response = await fetch('http://localhost:3000/admin/events/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                body: JSON.stringify({ title, description, imageurl: imagelink })
            });
            const responseData = await response.json();
            alert(responseData.message);
        } catch (err) {
            console.log(err);
        }
    }
    function handletitle(e){
        setTitle(e.target.value);
    }
    function handledescription(e){
        setDescription(e.target.value);
    }
    function handleimagelink(e){
        setImagelink(e.target.value);
    }


    return<>
    <Adminbar />
<div>
<div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Add New event</h5>
    <div class="flex justify-evenly w-full mt-10 space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
        

            <input type="text"  class="bg-gray-50 border w-1/4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value={title} onChange={handletitle} placeholder="Title" required/>
       
        
            <input type="text"  class="bg-gray-50 border w-1/4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value={description} onChange={handledescription} placeholder="Description" required/>
       
                    <input type="text"  class="bg-gray-50 border w-1/4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value={imagelink} onChange={handleimagelink} placeholder="imagelink" required/>

    </div>
    <button class="bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-700 m-4" onClick={handleAdd}><p className="text-white">Add</p></button>
</div>
</div>
<div className='flex justify-center'>
    <div className="max-w-screen-lg">
{events.map((event)=>{
    return <Eventedit title={event.title} description={event.description} imagelink={event.imageurl} _id={event._id}/>
})}
</div>
</div>

    


  </>

}

