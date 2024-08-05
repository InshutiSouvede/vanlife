export  async function getAllVans(){
    const res = await fetch('/api/vans')
    if(!res.ok){
        throw {
            message:"Failed to fetch vans",
            statusText:res.statusText,
            status:res.status
        }
    }
    const data = await res.json()
    return data.vans
}
export async function getVanById(id) {
    const  res = await fetch(`/api/vans/${id}`)
    const data = await res.json()
    return data.vans
}