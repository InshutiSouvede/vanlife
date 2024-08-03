import { useRouteError } from "react-router-dom";

export default function Error(){
    const err = useRouteError()
    return (
        <div className="text-center mt-20 bg-yellow-100">
        <h1 className="text-2xl capitalize">there was an error {err.message}</h1>
        <pre>{err.status} - {err.statusText}</pre>
        </div>
    )
}