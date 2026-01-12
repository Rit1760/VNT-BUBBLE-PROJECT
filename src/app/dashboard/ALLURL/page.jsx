import Link from "next/link"
export default function ALLURL(){
    return(
<>
<h2>home</h2>
<Link href="/dashboard/Hardware">Hardware</Link><br/>
<Link href="/dashboard/Project">Project</Link><br/>
<Link href="/dashboard/Solutions">Solutions</Link><br/>
<Link href="/dashboard/Networks">Networks</Link><br/>
<Link href="/dashboard/Users">Users</Link><br/>
<Link href="/dashboard/Devices">Device</Link>
<hr/>

<Link href="/dashboard/Projects/Alerts">Alerts</Link><br/>
<Link href="/dashboard/Projects/Locations">Locations</Link><br/>
<Link href="/dashboard/Projects/Reports">Reports</Link><br/>
<Link href="/dashboard/Projects/Notifications">Notification</Link><br/>
<Link href="/dashboard/Projects/FUoTA">FUoTA</Link><br/>
<Link href="/dashboard/Projects/Anylitics">Anylitics</Link><br/>
<Link href="/dashboard/Projects/Locations">Locations</Link><br/>
<hr />

</>
    )
}