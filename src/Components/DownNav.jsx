import Link from "next/link"
import "../Styles/DownNav.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faBell, faChartArea, faFlag, faLocation } from "@fortawesome/free-solid-svg-icons"
export default function DownNav(){  

 return(
    <>
    <div className="main1_DownNav">
        <div className="container1_DownNav">
            <div className="col1_DownNav">
                                        <ul>
<li> <FontAwesomeIcon icon={faBell} style={{width:"20px" , height:"20px" , fontSize:"20px"}} />  <Link href="/dashboard/Projects/Alerts"> Alerts</Link></li>
<li>  <FontAwesomeIcon icon={faLocation} style={{width:"20px" , height:"20px" , fontSize:"20px"}} /> <Link href="/dashboard/Projects/Locations"> Locations</Link></li>
<li> <FontAwesomeIcon icon={faFlag} style={{width:"20px" , height:"20px" , fontSize:"20px"}}/>  <Link href="/dashboard/Projects/Reports"> Reports</Link></li>
<li> <FontAwesomeIcon icon={faBell} style={{width:"20px" , height:"20px" , fontSize:"20px"}} /> <Link href="/dashboard/Projects/Notifications"> Notification</Link></li>
<li> <FontAwesomeIcon icon={faAngleLeft} style={{width:"20px" , height:"20px" , fontSize:"20px"}} /> <Link href="/dashboard/Projects/FUoTA"> FUoTA</Link></li>
<li>  <FontAwesomeIcon icon={faChartArea} style={{width:"20px" , height:"20px" , fontSize:"20px"}} /> <Link href="/dashboard/Projects/Anylitics"> Anylitics</Link></li>
</ul>
            </div>
        </div>
    </div>
    </>
 )
}
