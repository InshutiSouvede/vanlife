import { useEffect, useState } from "react"
import '../../../../server'
import { Link, useParams } from "react-router-dom"
export default function VanDetail(){
    const [van,setVan] = useState(null)
    const id = useParams().id
    useEffect(()=>{
        fetch(`/api/vans/${id}`)
        .then(data=>data.json())
        .then((data)=>{
            console.log(data.vans)
            setVan(data.vans)
        })
    },[id])
    const simple = 'bg-[#E17654]', luxury= 'bg-[#161616]',rugged ='bg-[#115E59]'
    return (
        <div className="p-10 text-lg">
           <Link to='..' relative="path">&larr; Back to all vans</Link>
           {
            van&&<div className=" flex flex-col gap-5 my-5">
                <img className="rounded-md" src={van.imageUrl} alt="" />
                <button className={` w-max text-xl text-center px-5 py-2 rounded-lg text-[#FFEAD0] ${van.type=='simple'?simple:van.type=='rugged'?rugged:luxury}`}>{van.type}</button>
                <h1 className="text-3xl font-bold">{van.name}</h1>
                <p><span className="font-semibold">${van.price}</span> /day</p>
                <p>{van.description}</p>
                <button className="bg-[#FF8C38] text-xl text-center p-3 rounded-lg font-semibold text-white" >Rent this van</button>
            </div>
            
           } 
        </div>
    )
}