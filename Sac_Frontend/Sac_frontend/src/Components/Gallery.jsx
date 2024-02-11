import {useState, useEffect} from 'react';
import axios from 'axios';
import Appbar from './Appbar';
import Footer from './Footer';

 
export default function Gallery() {
    const [gallery,setGallery]=useState([]);
    useEffect(()=>{ 
        getGallery();
    }
    ,[]);
    async function getGallery() {
        try {
            const response = await fetch('http://localhost:3000/gallery');
            if (response.ok) {
                const data = await response.json();
                setGallery(data);
            } else {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        } catch (err) {
            console.log(err);
        }
    }
    
  return (
    <>
    <Appbar/>
    
     <div className="flex justify-center m-5 p-5">
      <h1 className="text-3xl font-bold text-gray-800">Gallery of Met Bhujbal</h1>
     </div>
<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    {gallery.map((g)=>{
        return <div>
        <img class="h-auto max-w-full rounded-lg" src={g.imageurl} alt=""/>
    </div>
    })}

</div>

</>
  )
}