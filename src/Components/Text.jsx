import Draggable from "react-draggable";
import { useState } from "react";
const Text=()=>{
  
    const[val,setval]=useState("double click to edit")
    const [edit,seteditmode]=useState(true)
    return <div>
        <Draggable>
        {(edit)?<input onDoubleClick={(e)=>{seteditmode(false)}} value={val} onChange={(e)=>{setval(e.target.value)}} >
                </input>:<h1 onDoubleClick={(e)=>{seteditmode(true)}}>{val}</h1>}
        </Draggable> 

    </div>
  
}
export default Text;