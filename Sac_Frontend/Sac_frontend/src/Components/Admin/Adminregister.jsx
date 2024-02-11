import { useState } from "react"
import axios from "axios"
import Adminbar from "./Adminbar"

export default function Adminregister(){
    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")
    const [terms, setTerms] = useState(false)
    const handlename = (e) => { 
        setName(e.target.value)
    }
    const handleposition = (e) => {
        setPosition(e.target.value)
    }
    const handleemail = (e) => {
        setEmail(e.target.value)
    } 
    const handlephone = (e) => {  
        setPhone(e.target.value)
    } 
    const handleusername = (e) => { 
        setUsername(e.target.value)
    } 
    const handlepassword = (e) => { 
        setPassword(e.target.value)
    } 
    const handlerepeatpassword = (e) => { 
        setRepeatPassword(e.target.value)
    } 
    const handleterms = (e) => {
        setTerms(e.target.checked)
    } 
    
    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    function validatePhone(phone) { 
        var re = /^\d{10}$/;
        return re.test(phone);
    }
  
    function validatePassword(password) {
        return password.length >= 7;
    }
    function validateUsername(username) {
        var re = /^[a-zA-Z0-9]+$/;
        return re.test(username);
    }
    function validateName(name) {     
        var re = /^[a-zA-Z]+$/;
        return re.test(name);
    }
    function validatePosition(position) {
        var re = /^[a-zA-Z]+$/;
        return re.test(position);
    }
    function validateRepeatPassword(password, repeatPassword) {
        return password === repeatPassword;
    }
    function validateTerms(terms) {
        return terms;
    }
    function validateForm(name, position, email, phone, username, password, repeatPassword, terms){  
        console.log(validateName(name), validatePosition(position), validateEmail(email), validatePhone(phone), validateUsername(username), validatePassword(password), validateRepeatPassword(password, repeatPassword), validateTerms(terms)); 
        return validateName(name) && validatePosition(position) && validateEmail(email) && validatePhone(phone) && validateUsername(username) && validatePassword(password) && validateRepeatPassword(password, repeatPassword) && validateTerms(terms);
    }

    async function register() {
        if (validateForm(name, position, email, phone, username, password, repeatPassword, terms)) {
            try {
                const token = localStorage.getItem('token');
                const response = await fetch("http://localhost:3000/admin/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": token
                    },
                    body: JSON.stringify({
                        name: name,
                        position: position,
                        email: email,
                        phone: phone,
                        username: username,
                        password: password
                    })
                });
                const responseData = await response.json();
                alert(responseData.message);
            } catch (error) {
                console.error(error);
            }
        }
    }
    

    return <>
    <Adminbar />
<div className="w-full flex justify-center "> 
<div class=" w-full  max-w-screen-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 m-20">

  <div class="mb-5">
    <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
    <input  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Name" value={name} onChange={handlename} required />
  </div>
  <div class="mb-5">
    <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Position</label>
    <input  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Position" value={position} onChange={handleposition} required />
  </div>
  <div class="mb-5">
    <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">email</label>
    <input  type="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="email@gmail.com" value={email} onChange={handleemail} required />
  </div>
  <div class="mb-5">
    <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
    <input  type="tel" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Phone Number" value={phone} onChange={handlephone} required />
  </div>
  
  <div class="mb-5">
    <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
    <input  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Username" value={username} onChange={handleusername} required />
  </div>
  <div class="mb-5">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
    <input type="password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" value={password} onChange={handlepassword} required />
  </div>
  <div class="mb-5">
    <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
    <input type="password" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" value={repeatPassword} onChange={handlerepeatpassword} required />
  </div>
  <div class="flex items-start mb-5">
    <div class="flex items-center h-5">
      <input id="terms" type="checkbox"  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" value={terms} onChange={handleterms} required />
    </div>
    <label for="terms" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
  </div>
  <button type="submit" class="w-full text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-700 mt-10"  onClick={register}> Register New Admin</button>
    </div>
    </div>


    </>
}