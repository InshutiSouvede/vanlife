import { Form } from "react-router-dom";

export async function loginAction({request}){
    const formData = await request.formData()
    return null
}
export default function Login(){
    return (
        <div className="p-10">
            <h1 className="text-center text-3xl font-bold">Sign in to your account</h1>
            <Form method="post" className="flex flex-col my-10">
                <input name="email" className=" rounded-br-none rounded-bl-none rounded-md h-10 border border-gray-400 px-5 " type="text" placeholder="Email address"/>
                <input name="passwd" className="rounded-tr-none rounded-tl-none rounded-md h-10 border border-gray-400 px-5 " type="password" placeholder="Password"/>
                <button type="submit" className="bg-[#FF8C38] text-white font-bold  h-10 rounded-md my-10">Sign in</button>
            </Form>
            <p>Don't have an account? <span className="text-[#FF8C38] font-bold">Create one now</span></p>
        </div>
    )
}