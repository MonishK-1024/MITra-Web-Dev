import React from 'react'
import '../css/WidgetOptions.css'
import IH from "../Images/IH.jpg"
import Prokarters from "../Images/prokarters.png"
import ACC from "../Images/acc.png"
import Shut from "../Images/shut.jpg"
import Tx from "../Images/yx.jpg"

function WidgetOptions() {
    return (
        <div className="widgetOptions">

            <div className="widget_content">
                <img src={IH} alt="Innovators Hub" />
                <div className="widget_contentTitle">
                    <h5><a href="https://www.innovators-hub.in/" target="_blank">Innovators Hub</a></h5>
                    <p>An Interdisciplinary Club fuelled by Innovation</p>
                </div>
            </div>

            <div className="widget_content">
                <img src={Prokarters} alt="pkr" />
                <div className="widget_contentTitle">
                    <h5><a href="https://www.teamprokarters.com/" target="_blank">Prokarters</a></h5>
                    <p>Official Go-Karting Club of MITWPU!</p>
                </div>
            </div>

            <div className="widget_content">
                <img src={ACC} alt="Acc" />
                <div className="widget_contentTitle">
                    <h5><a href="https://mitwpu.edu.in/student-achievements/mit-wpu-acceleracers" target="_blank">Acceleracers</a></h5>
                    <p>Official F1 Club of MITWPU!</p>
                </div>
            </div>

            <div className="widget_content">
                <img src={Shut} alt="" />
                <div className="widget_contentTitle">
                    <h5><a href="https://www.instagram.com/mitwpushutterbugs/?hl=en" target="_blank">ShutterBugs</a></h5>
                    <p>Photography Club of MITWPU!</p>
                </div>
            </div>

            <div className="widget_content">
                <img src={Tx} alt="Texephyr" />
                <div className="widget_contentTitle">
                    <h5><a href="https://www.texephyr.in/" target="_blank">Texephyr</a></h5>
                    <p>Texephyr, a national level techfest organized by the students of MIT WPU!</p>
                </div>
            </div>

        </div>
    )
}

export default WidgetOptions
