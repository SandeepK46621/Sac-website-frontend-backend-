import {useEffect, useState} from 'react';
import axios from 'axios';
import Memberedit from './Membercard.jsx';
import Appbar from './Appbar';

export default function Usermembers(){
    const [members,setMembers]=useState([]);
    useEffect(()=>{ 
        getMembers();
    }
    ,[]);
    async function getMembers(){
        try{
            const response=await axios.get('http://localhost:3000/members');
            setMembers(response.data);
        }
        catch(err){
            console.log(err);
        }
    }
    return <>
    <Appbar/>
    <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mt-10 mb-10">Our Team</h1>
    <div className="flex justify-center">
    <div className='flex-wrap flex'>
        
            {members.map((m)=>{
                return <Memberedit name={m.name} position={m.position} imagelink={m.imageurl}/>
            })}
        </div>
        
    </div>

    </>
}