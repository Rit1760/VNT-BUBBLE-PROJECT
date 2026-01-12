'use client'

import { useState, useEffect } from "react"

import Image from "next/image"
import "../Styles/Header.css"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClockRotateLeft, faComputer, faGear, faHouseLaptop,  faAngleUp, faPenToSquare, faRightFromBracket, faSearch, faUsers, faWifi , faAngleDown } from "@fortawesome/free-solid-svg-icons"

FontAwesomeIcon
export default function Header(){

    const [activeData1 , setActiveData] = useState(false)

    const clickData1 = () => {
        setActiveData(!activeData1)
    }
    return(
        <>
        <div className="main1_Header">
            <div className="container1_Header">
                <div className="row1_Header">
                    <div className="col1_Header">
                        <Link href="/dashboard">
                        <Image src="/Images/VNT-logo.png" width={100} height={80} alt="VNT-logo" /></Link>
                    </div>
                    <div className="col2_Header">
                        <ul>
                            <li><FontAwesomeIcon icon={faComputer} style={{width:"20px" , height:"20px" , fontSize:"20px"}} />  <Link href="/dashboard/Hardware">Hardware</Link></li>
                            <li><FontAwesomeIcon icon={faSearch} style={{width:"20px" , height:"20px" , fontSize:"20px"}} />  <Link href="/dashboard/Project">Project</Link></li>
                            <li><FontAwesomeIcon icon={faClockRotateLeft} style={{width:"20px" , height:"20px" , fontSize:"20px"}} /> <Link href="/dashboard/Solutions">Solutions</Link></li>
                            <li> <FontAwesomeIcon icon={faWifi} style={{width:"20px" , height:"20px" , fontSize:"20px"}} /> <Link href="/dashboard/Networks">Networks</Link></li>
                            <li>  <FontAwesomeIcon icon={faUsers} style={{width:"20px" , height:"20px" , fontSize:"20px"}} /> <Link href="/dashboard/Users">Users</Link></li>
                            <li> <FontAwesomeIcon icon={faHouseLaptop} style={{width:"20px" , height:"20px" , fontSize:"20px"}} /> <Link href="/dashboard/Devices">Devices</Link></li>
                        </ul>
                    </div>
                    <div className="col3_Header">
                        <div className="col3_Header1">
                             <FontAwesomeIcon icon={faGear} style={{width:"20px" , height:"20px" , fontSize:"20px" , color:"#ff6600"}} /> 
                        </div>
                        <div className="col3_Header2">
                           
                           
                        </div>
                        <div className="col3_Header3">
                            <h4>                            <span onClick={clickData1}> {activeData1 ? ( 
                                <>
                                 VNT Admin <FontAwesomeIcon icon={faAngleDown} />
                                 </>
                             ) : (
                                <>
                                 VNT Admin  <FontAwesomeIcon icon={faAngleUp} />
                                </>
                              )}
                            </span>   </h4>
                                                        {/* <span onClick={clickData}> {activeData ? ( 
                                <>
                                 Active <FontAwesomeIcon icon={faAngleDown} />
                                 </>
                             ) : (
                                <>
                                  DeActive <FontAwesomeIcon icon={faAngleUp} />
                                </>
                              )}
                            </span> */}
                        </div>
                </div>
                </div>
            </div>
 {activeData1 && (
            <div className="popup_panel_container">
<div className="row1popup_panel">
    <div className="col1_popup_panel"></div>
    <div className="col2_popup_panel">
        <h4>VNT Admin</h4>
    </div>
    <div className="col3_popup_panel">
              <FontAwesomeIcon icon={faPenToSquare} style={{width:"15px" , height:"15px" , fontSize:"15px" , color:"#000000ff"}} /> 
    </div>
</div>
<div className="row2popup_panel">
    <div className="col4_popup_panel">
        <h3>Other organisations</h3>
    </div>
</div>
<div className="row3popup_panel">
    <div className="col5_popup_panel">
              <FontAwesomeIcon icon={faRightFromBracket} style={{width:"25px" , height:"25px" , fontSize:"25px" , color:"#000000ff"}} /> 
    </div>
    <div className="col6_popup_panel">
        <h4>Log Out</h4>
    </div>
</div>
            </div>
 )}
        </div>
        </>
    )
}
