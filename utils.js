// import { redirect } from "react-router-dom"
import { redirect } from "./redirectUtil"
export async function checkLoginStatus(request) {
    const loggedin = localStorage.getItem("isloggedIn")== "true"

    const redirectTo = new URL(request.url).pathname
    // console.log("This is wher the request  came from",new URL(request.url).pathname)
    if(!loggedin){
        console.log("I am supposed to redirect you")
        throw redirect(`/login?message=You must log in first.&redirectTo=${redirectTo}`)
    }
    return null 
}

