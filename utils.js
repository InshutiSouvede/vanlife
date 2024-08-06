import { redirect } from "react-router-dom"

export async function checkLoginStatus(request) {
    const loggedin = true
    console.log("This is wher the request  came from",new URL(request.url).pathname)
    if(!loggedin){
        console.log("I am supposed to redirect you")
        throw redirect("/login")
    }
    return null 
}