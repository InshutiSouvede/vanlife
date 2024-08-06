import { redirect } from "react-router-dom"

export async function checkLoginStatus() {
    const loggedin = false
    if(!loggedin){
        throw redirect("/login")
    }
    
}