import React from 'react'
import axios from 'axios'
export default function Newsedit({title,description,_id}) {
    async function handleDelete() {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`http://localhost:3000/admin/news/delete/${_id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': token 
                }
            });
            const responseData = await response.json();
            alert(responseData.message);
        } catch (err) {
            console.log(err);
        }
    }
    
    return <>


<div class="w-full p-4  bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{title}</h5>
    <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">{description}</p>
    
    <button class="bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-700 m-4" onClick={handleDelete}><p className="text-white">Delete</p></button>
    
</div>

    </>
}