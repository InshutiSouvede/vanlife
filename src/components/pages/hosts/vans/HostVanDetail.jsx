import { useOutletContext } from "react-router-dom"

export default function HostVanDetail(){
  const van = useOutletContext().van
  console.log("outelet context",van)
  return (
    <div className="flex flex-col gap-5">
    <p><span className="font-semibold">Name:</span> {van.name}</p>
    <p><span className="font-semibold">Category:</span> {van.type}</p>
    <p><span className="font-semibold">Description:</span> {van.description}</p>
    <p><span className="font-semibold">Visibility:</span> Public</p>
    
    
    </div>
  )
}