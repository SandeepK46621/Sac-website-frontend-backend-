import { useState,useEffect } from "react";
import axios from "axios";
import News from "./News";
import Appbar from "./Appbar";
import Footer from "./Footer";

export default function UserNews(){
    const [news,setNews]=useState([]);
    useEffect(()=>{ 
        getNews();
    }
    ,[]);
    async function getNews() {
        try {
          const response = await fetch('http://localhost:3000/news');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setNews(data);
        } catch (error) {
          console.error('Error fetching news:', error);
        }
      }
    return <>
    <Appbar/>
    <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mt-10 mb-10">News</h1>
    <div className="flex justify-center">
    <div className="flex justify-center">
    <div className="w-full">
            {news.map((n)=>{
                return <News title={n.title} description={n.description} />
            })}
        </div>
        </div>

    </div>

    </>
}