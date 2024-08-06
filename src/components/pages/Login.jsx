import { Form, useActionData, useSearchParams } from "react-router-dom";
import { redirect } from "../../../redirectUtil";
import {userLogin} from '../../API'
export async function loginAction({request}){
    try {
        const formData = await request.formData()
        const email = formData.get("email")
        const password = formData.get("passwd")
        const userData = await userLogin(email,password)
        const redirectTo = new URL(request.url).pathname
        console.log("userData",userData)
        console.log("redirectTo",redirectTo)
        localStorage.setItem("isloggedIn",true)
        return redirect("/host")
    } catch (error) {
        console.log("catching error",error.message)
        return error.message
    }
    
}
export default function Login(){
    const erroMessage = useActionData()
    const [searchParams, setSearchParams] = useSearchParams();
    const loginWarning = searchParams.get("message")
    console.log("loginWarning",loginWarning)
    console.log("erroMessage",erroMessage)
    return (
        <div className="p-10">
            <h1 className="text-center text-3xl font-bold">Sign in to your account</h1>
            {loginWarning&&<p className="text-red-800 font-semibold text-center">{loginWarning}</p>}
            <Form method="post" className="flex flex-col my-10" replace>
                <input name="email" className=" rounded-br-none rounded-bl-none rounded-md h-10 border border-gray-400 px-5 " type="text" placeholder="Email address"/>
                <input name="passwd" className="rounded-tr-none rounded-tl-none rounded-md h-10 border border-gray-400 px-5 " type="password" placeholder="Password"/>
                <button type="submit" className="bg-[#FF8C38] text-white font-bold  h-10 rounded-md my-10">Sign in</button>
            </Form>
            <p>Don't have an account? <span className="text-[#FF8C38] font-bold">Create one now</span></p>
        </div>
    )
}