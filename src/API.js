export  async function getAllData(){
    const res = await fetch("api/vans")
    const data = await res.json()
    return data
}