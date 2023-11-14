import { Outlet } from "@remix-run/react"

export default function Dashboard(){
    return(
        <div>
            <h1>hello from the dashboard layout</h1>
            <Outlet />
        </div>
    )
}