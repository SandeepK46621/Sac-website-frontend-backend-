import {useState,useEffect} from 'react';
import Adminbar from './Adminbar';
export default function Gallerypage() {

    const [photos,setPhotos]=useState("");
    const [title,setTitle]=useState("");

    
      
    function handletitle(e){
        setTitle(e.target.value);
    }
    function handleAdd() {
        try {
            const token = localStorage.getItem('token');
            fetch('http://localhost:3000/admin/gallery/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                body: JSON.stringify({ name:title , imageurl:photos})
            })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
            })
            .catch(err => {
                console.log(err);
            });
        } catch (err) {
            console.log(err);
        }
    }
    
    function handlephoto(e){
        setPhotos(e.target.value);
    }
    return <> 
    <Adminbar   />
    <div>
  <div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Add photos</h5>
    <div class="flex justify-evenly w-full mt-10 space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
        

            <input type="text"  class="bg-gray-50 border w-1/3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Title" value={title} onChange={handletitle} required/>
       
        
            <input type="text"  class="bg-gray-50 border w-1/3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Image Link" value={photos} onChange={handlephoto} required/>
       
                    

    </div>
    <button class="bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-700 m-4"><p className="text-white" onClick={handleAdd}>Add</p></button>
</div>
</div>
    </>
}