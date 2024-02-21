import {useSearchParams } from "react-router-dom";
import Text from "../Components/Text";
import { Button } from "react-bootstrap";
import { createRef, useState } from "react";
import { exportComponentAsJPEG } from "react-component-export-image";
const EditMemesPage=()=>
{
    const[params]=useSearchParams();
    const [count,setcount]=useState(0)
    const addtext=()=>
    {
        setcount(count+1)
    }
    const memesref=createRef()
    return<div  style={{width:'1000px', border:"1px", display:'table-row'}}
    >
         <div ref={memesref}>
         <img src={params.get('url')} style={{height:'200px'}}></img>
        {Array(count).fill(0).map(e=><Text></Text>)}
       
        </div>
       
        <Button onClick={addtext}>add text</Button>
        <Button onClick={(e)=>{exportComponentAsJPEG(memesref)}}>save</Button>
    </div>
}
export default EditMemesPage;