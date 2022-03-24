import React from 'react'
import '../css/SidebarOptions.css'
import Add from '@material-ui/icons/Add';

function SidebarOptions() {
    return (

        <div className="SidebarOptions">
            <a href="#Engineering">
                <div className="SidebarOption">
                    <img src="https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg" alt="Engg" />
                    <p>Engineering</p>
                </div>
            </a>

            <a href="#MBA">
                <div className="SidebarOption">
                    <img src="https://images.pexels.com/photos/6120214/pexels-photo-6120214.jpeg" alt="MBA" />
                    <p>MBA</p>
                </div>
            </a>

            <a href="#Pharmacy">
                <div className="SidebarOption">
                    <img src="https://images.pexels.com/photos/5998512/pexels-photo-5998512.jpeg" alt="Pharma" />
                    <p>Pharmacy</p>
                </div>
            </a>

            <a href="#Law">
                <div className="SidebarOption">
                    <img src="https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg" alt="Law" />
                    <p>Law</p>
                </div>
            </a>

            <a href="#Psychology">
                <div className="SidebarOption">
                    <img src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg" alt="Psychology" />
                    <p>Psychology</p>
                </div>
            </a>

            <a href="#Food">
                <div className="SidebarOption">
                    <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg" alt="Food" />
                    <p>Food</p>
                </div>
            </a>

            <a href="#Coding">
                <div className="SidebarOption">
                    <img src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg" alt="Coding" />
                    <p>Coding</p>
                </div>
            </a>

            <a href="#Movies">
                <div className="SidebarOption">
                    <img src="https://images.pexels.com/photos/265685/pexels-photo-265685.jpeg" alt="Movies" />
                    <p>Movies</p>
                </div>
            </a>

            <a href="#Anime">
                <div className="SidebarOption">
                    <img src="https://images.pexels.com/photos/4656725/pexels-photo-4656725.jpeg" alt="Anime" />
                    <p>Anime</p>
                </div>
            </a>

            <a href="#Music">
                <div className="SidebarOption">
                    <img src="https://images.pexels.com/photos/3971983/pexels-photo-3971983.jpeg" alt="Music" />
                    <p>Music</p>
                </div>
            </a>

            <div className="SidebarOption">
                <Add />
                <p className="text">Discover More Interests</p>
            </div>


        </div >
    )
}

export default SidebarOptions
