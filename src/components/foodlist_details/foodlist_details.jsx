import { useEffect, useState } from "react"
import axios from "axios"

export const FoodDetails =()=>{
   const [item,setItem] =useState({})

   useEffect(()=>{
    axios.get(`http://localhost:3000/data/${code}`).then((res)=>{
        console.log(res.data)
        setItem(res.data)
       })
   },[])
    return (
        <div>
            details
        </div>
    )
}