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
    const userData = await res.json()
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
    const dataArr = querySnapshot.docs.map((doc)=>({id:doc.id,...doc.data()}))
    
    return dataArr
}
export  async function getHostVans(){
    const q = query(vansCollectionRef,where("hostId","==","123"))
    
    const querySnapshot = await getDocs(q)
    const dataArr = querySnapshot.docs.map((doc)=>({id:doc.id,...doc.data()}))
    
    return dataArr
}
export async function getVanById(id) {
    const docRef = doc(db,"vans",id)
    const vanSnapshot = await getDoc(docRef)
    const data = {id:vanSnapshot.id,...vanSnapshot.data()}
    return data
}
export async function getHostVanById(id) {
    const q = query(vansCollectionRef,where("hostId","==","123"),where("id","==",id))
    
    const querySnapshot = await getDocs(q)
    const doc = querySnapshot.docs[0]
    const data = {id:doc.id,...doc.data()}
    
    return data
}