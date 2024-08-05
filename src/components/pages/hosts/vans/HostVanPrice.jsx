import { useOutletContext } from "react-router-dom"

export default function HostVanPrice(){
    const van = useOutletContext().van
    return (
      <>
      <p><span className="font-bold">${van.price.toFixed(2)}</span>/day</p>
      </>
    )
  }