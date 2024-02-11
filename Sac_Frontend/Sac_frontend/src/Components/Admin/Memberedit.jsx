import React from 'react';
import axios from 'axios';

export default function Memersedit({name,position,imagelink,_id}){
  async function handleDelete() {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:3000/admin/members/delete/${_id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': token
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Error deleting member:', error);
    }
  }

    return <>
    <div>
   <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
    <img src={imagelink} alt="profile-picture" />
  </div>
  <div className="p-6 text-center">
    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {name}
    </h4>
    <p
      className=" text-gray-900 block font-sans text-base antialiased font-medium leading-relaxed  bg-clip-text bg-gradient-to-tr ">
        {position}
    </p>
  </div>

    
    <button class="bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-700 m-4" onClick={handleDelete}><p className="text-white">Delete</p></button>

</div>
</div>
  
    </>
}