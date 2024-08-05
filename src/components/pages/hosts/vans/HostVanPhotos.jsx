import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos(){
    const van = useOutletContext().van
    return (
      <>
      <img src={van.imageUrl} alt="" className="w-32 rounded-md" />
      </>
    )
  }