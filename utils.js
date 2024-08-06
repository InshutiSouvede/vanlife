// import { redirect } from "react-router-dom"
import { redirect } from "./redirectUtil"
export async function checkLoginStatus(request) {
    const loggedin = localStorage.getItem("isloggedIn")=== "true"

    const redirectTo = new URL(request.url).pathname
    if(!loggedin){
        throw redirect(`/login?message=You must log in first.&redirectTo=${redirectTo}`)
    }
    return null 
}
export async function DoNotLoginAgain(request) {
    const loggedin = localStorage.getItem("isloggedIn")=== "true"

    const redirectTo = new URL(request.url).pathname

    if(loggedin){
        // console.log("Already logged in",redirectTo)
        throw redirect('/host')
    }
    return null 
}

