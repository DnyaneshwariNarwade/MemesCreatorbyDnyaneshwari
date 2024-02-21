import React from "react";

import MemeCart from "../Components/Cart";
import { getAllMemes } from "../API/Memes";
import { useEffect } from "react";
import { useState } from "react";
import '../App.css'
export const HomePage=()=>
{
    const [data,setdata]=useState([]);
    useEffect(
        ()=>{
            getAllMemes().then((memes)=>setdata(memes.data.memes))
        },[])
    return<div style={{ display:'flex',  flexWrap:'wrap' }}>
        
        {
            
        data.map(e=><MemeCart  img={e.url} title={e.name}></MemeCart>)
        }   
        
    </div>;
}
export default HomePage;