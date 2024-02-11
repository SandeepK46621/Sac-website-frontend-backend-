import Appbar from "./Appbar";
import Footer from "./Footer";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

export default function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate();
    async function login(){
        console.log({username,password})
        try {
            const headers = {
              'Content-Type': 'application/json',
              'username': username,
              'password': password
            };
          
            const response = await fetch('http://localhost:3000/admin/login', {
              method: 'POST',
              headers: headers,
              body: JSON.stringify({})
            });
          
            if (response.ok) {
              
              const data = await response.json();
              console.log(data)
              localStorage.setItem('token', data.Authorization);
              navigate('/admin');
            } else {
              const errorData = await response.json();
              alert(errorData.message);
            }
          
            console.log(await response.json());
          } catch (err) {
            console.error(err);
          }
          
    }
    function handleUsername(e){
        setUsername(e.target.value);
    }
    function handlePassword(e){
        setPassword(e.target.value);
    }

    return <>
    <Appbar/>
<div className="w-full flex justify-center "> 
<div class=" w-full  max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 m-20">
    <div >
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">Admin login</h5>
        <div className="mt-10">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Username" value={username} onChange={handleUsername} required/>
        </div>
        <div className="mt-10">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value={password} onChange={handlePassword} required/>
        </div>
        <div class="flex items-start mt-10">
            <div class="flex items-start">
                <div class="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                </div>
                <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <a href="#" class="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
        </div>
        <button type="submit" class="w-full text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-700 mt-10"  onClick={login}>Login to your account</button>
       
        </div>
</div>

</div>
 
    </>
}