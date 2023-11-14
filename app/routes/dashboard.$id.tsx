// localhost:3000/dashboard/4231223
// localhost:3000/dashboard/dynamic value
// localhost:3000/dashboard/hello

import { useParams } from "@remix-run/react";


export default function DashboardId() {
    const { id } = useParams();

  return (
    <h1>hello from the Idpage {id}</h1>
  )
}
