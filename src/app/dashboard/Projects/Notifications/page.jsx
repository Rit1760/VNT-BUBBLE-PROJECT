'use client'

import { useState } from "react"
import "../../../../Styles/Notifications.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown, faAngleUp, faDownLong , faUpLong } from "@fortawesome/free-solid-svg-icons"
faDownLong
FontAwesomeIcon

export default function Notifications(){
    const [activeData , setActiveData] = useState(true)

    const clickData = () => {
        setActiveData(!activeData)
    }

    return(
        <>
        <div className="main1_Notifications">
            <div className="container2_Notification">
                <div className="row1_Notification">
                    <div className="col1_Notification">

                    </div>

                    <div className="col2_Notification">
                        <input type="text" />
                    </div>
                </div>
            </div>
            <div className="container3_Notification">
                <div className="row2_Notification">
                    <div className="col3_Notification">

                    </div>
                    <div className="col4_Notification">
<span onClick={clickData}> {activeData ? ( 
    <> Active <FontAwesomeIcon icon={faAngleDown} /></>
 ) : (
    <>
      DeActive <FontAwesomeIcon icon={faAngleUp} />
    </>
  )}
</span>

                    </div>
                </div>
            </div>
            {activeData && (
            <div className="container1_Notification">
                <table>
                    <thead>
                        <tr>
                            <th>Device</th>
                            <th>Device ID</th>
                            <th>Alert</th>
                            <th>Location</th>
                            <th>Count</th>
                            <th>Output</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                </table>
            </div>
                        )}
        </div>
        </>
    )
}

