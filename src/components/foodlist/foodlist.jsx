import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import icon from "../../icons/square_icon.png"
import "./foodlist.css"
export const Food =()=>{
   const [item,setItem] =useState([])
   const navigate =useNavigate()
   useEffect(()=>{
       axios.get("https://sudhanshu7352.github.io/practice/db.json").then((res)=>{
        // console.log(res.data.data)
        setItem(res.data.data)
       })
   },[])
    return (
        <div className="main_div">
            {
                item.map((e)=>(
                    <div onClick={()=>navigate(`food/${e.code}`)} key={e.code}>
                        <div>

                        <img src={icon} alt="icon" />
                        </div>
                        <div className="name_div"><span><b>{e.product_name}</b> </span><span>({e.generic_name})</span></div>
                        
                    </div>
                ))
            }
        </div>
    )
}