import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCoc8Dtc-PuSlY-ZA-3dgaf9qfLJHzmeuo",
  authDomain: "vanlife-e3389.firebaseapp.com",
  projectId: "vanlife-e3389",
  storageBucket: "vanlife-e3389.appspot.com",
  messagingSenderId: "202879880709",
  appId: "1:202879880709:web:6f833ee152f3989693d66c"
};

const app = initializeApp(firebaseConfig);


export async function userLogin(email,password){
    // return data
    const res = await fetch('/api/login',{method:"post",body:JSON.stringify({email,password})})
    console.log("response",res)
    const userData = await res.json()
    //  userData = await userData.json()
    console.log("responsejson",userData)
    if(!res.ok){
        throw {
            message: userData.message||"User not found",
            statusText:res.statusText,
            status:res.status
        }
    }
    
    return userData
}
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
export  async function getHostVans(){
    const res = await fetch('/api/host/vans')
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
    if(!res.ok){
        throw {
            message:"Failed to fetch that vans",
            statusText:res.statusText,
            status:res.status
        }
    }
    const data = await res.json()
    return data.vans
}
export async function getHostVanById(id) {
    const  res = await fetch(`/api/host/vans/${id}`)
    if(!res.ok){
        throw {
            message:"Failed to fetch that vans",
            statusText:res.statusText,
            status:res.status
        }
    }
    const data = await res.json()
    return data.vans
}