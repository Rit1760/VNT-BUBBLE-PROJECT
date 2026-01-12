import "../../../../Styles/FUoTA.css"

export default function FUoTA(){
    return(
        <>
        <div className="main1_FUoTA">
            <div className="container1_FUoTA">
                <div className="row1_FUoTA">
                    <div className="col1_FUoTA"></div>
                    <div className="col2_FUoTA">
                        <button type="submit" className="btn">Start</button>
                    </div>
                </div>
            </div>
            <div className="container2_FUoTA">
        <table>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>initiated By</th>
                    <th>Last initiated</th>
                    <th>Software image</th>
                    <th>Device List</th>
                </tr>
            </thead>
        </table>
            </div>
        </div>
        </>
    )
}

