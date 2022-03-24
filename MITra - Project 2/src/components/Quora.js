import React from 'react'
import '../css/Quora.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widget from './Widget'


function Quora() {

    return (
        <div className="Quora">
            <Navbar />
            <div className="Quora_content">
                <Sidebar />
                <Feed />
                <Widget />
            </div>
        </div>
    )
}

export default Quora
