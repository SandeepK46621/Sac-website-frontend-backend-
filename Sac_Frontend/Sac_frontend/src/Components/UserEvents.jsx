import {useEffect, useState} from 'react';
import axios from 'axios';
import Eventcard from './Eventcard';
import Appbar from './Appbar';
import Footer from './Footer';

export default function UserEvents(){

    const [events,setEvents]=useState([]);
    useEffect(()=>{ 
        getEvents();
    }
    ,[]);
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
    return <>
    <Appbar/>
    <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mt-10 mb-10">Our Events</h1>
    <div className="flex justify-center">
    <div className="max-w-screen-lg">
            {events.map((e)=>{
                return <Eventcard title={e.title} description={e.description} imagelink={e.imageurl}/>
            })}
        </div>

    </div>

    </>
}