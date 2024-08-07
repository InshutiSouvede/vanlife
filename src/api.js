import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";//lite: No real-time update
const firebaseConfig = {
  apiKey: "AIzaSyCoc8Dtc-PuSlY-ZA-3dgaf9qfLJHzmeuo",
  authDomain: "vanlife-e3389.firebaseapp.com",
  projectId: "vanlife-e3389",
  storageBucket: "vanlife-e3389.appspot.com",
  messagingSenderId: "202879880709",
  appId: "1:202879880709:web:6f833ee152f3989693d66c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const vansCollectionRef = collection(db,"vans")
 



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
    const querySnapshot = await getDocs(vansCollectionRef)
    const dataArr = querySnapshot.docs.map((doc)=>({...doc.data(),id:doc.id}))
    
    return dataArr
}
export  async function getHostVans(){
    const q = query(vansCollectionRef,where("hostId","==","123"))
    
    const querySnapshot = await getDocs(q)
    const dataArr = querySnapshot.docs.map((doc)=>({...doc.data(),id:doc.id}))
    
    return dataArr
}
export async function getVanById(id) {
    const docRef = doc(db,"vans",id)
    const vanSnapshot = await getDoc(docRef)
    const data = {...vanSnapshot.data(), id:vanSnapshot.id}
    return data
}
export async function getHostVanById(id) {
    const q = query(vansCollectionRef,where("hostId","==","123"),where("id","==",id))
    
    const querySnapshot = await getDocs(q)
    const doc = querySnapshot.docs[0]
    const data = {...doc.data(),id:doc.id}
    
    return data

    // const  res = await fetch(`/api/host/vans/${id}`)
    // if(!res.ok){
    //     throw {
    //         message:"Failed to fetch that vans",
    //         statusText:res.statusText,
    //         status:res.status
    //     }
    // }
    // const data = await res.json()
    // return data.vans
}