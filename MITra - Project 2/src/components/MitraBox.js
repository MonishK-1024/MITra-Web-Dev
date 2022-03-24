import { Avatar } from '@material-ui/core'
import React from 'react'
import '../css/MitraBox.css'
import { selectUser } from '../features/userSlice'
import { useSelector } from "react-redux";


function MitraBox() {
    // const user = useSelector(selectUser)
    return (
        <div className="mitraBox">
            <div className="mitraBox_info">
                {/* <Avatar src = {user.photo} /> */}
                <h5>Username</h5>
            </div>
            <div className="boxMitra">
                <p>What is your Question ?</p>
            </div>
        </div>
    )
}

export default MitraBox
