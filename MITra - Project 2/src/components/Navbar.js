import React from "react";
import HomeIcon from '@material-ui/icons/Home';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import { Avatar } from '@material-ui/core';
import { Button } from '@material-ui/core';
import '../css/Navbar.css';
import { selectUser } from '../features/userSlice';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import * as FireAuth from "../FireAuth";


function Navbar() {

    const user = useSelector(selectUser);
    const navigate = useNavigate();


    async function clickFunctionSignout() {
        await FireAuth.signOut();
        navigate("/");
    }

    return (
        <div className='navbar'>
            <div className="mitraLogo">
                <img src="https://i.ibb.co/Qb4QppH/Screenshot-416.png" alt="new" ></img>
            </div>
            <div className="navbar_icons">
                <div className="navbar_icon">
                    <HomeIcon />
                </div>
                <div className="navbar_icon">
                    <FeaturedPlayListOutlinedIcon />
                </div>
                <div className="navbar_icon">
                    <AssignmentTurnedInOutlinedIcon />
                </div>
                <div className="navbar_icon">
                    <PeopleAltOutlinedIcon />
                </div>
                <div className="navbar_icon">
                    <NotificationsOutlinedIcon />
                </div>
            </div>
            <div className="navbar_search">
                <SearchIcon />
                <input type="text" placeholder="Search MITra" />
            </div>
            <div className="navbar_right">
                <div className="navbar_avatar">
                    <Avatar onClick={() => clickFunctionSignout()} />
                    {/* <Avatar src={user.displayName} /> */}
                </div>
                <LanguageIcon />
                <Button>Add Question</Button>
            </div>

        </div>
    )
}

export default Navbar
