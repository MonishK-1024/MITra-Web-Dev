import { Avatar } from '@material-ui/core';
import React from 'react';
import '../css/Post.css';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import { MoreHorizOutlined, ShareOutlined } from '@material-ui/icons'
import { selectUser } from '../features/userSlice'
import { useSelector } from "react-redux";

function Post() {
    const user = useSelector(selectUser)
    return (
        <div className="post">
            <div className="post_info">
                <Avatar />
                <h5><i>Display Name</i></h5>
                {/* <h5>{user.displayName}</h5> */}
                <small><i>Time Stamp</i></small>
            </div>
            <div className="post_body">
                <div className="post_question">
                    <p>Question</p>
                    <button className="post_btnAnswer">Answer</button>
                </div>
                <div className="post_answer">
                    <p></p>
                </div>
                <img src="https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg" alt="Qimg"></img>
                <div className="post_footer">
                    <div className="post_footerAction">
                        <ArrowUpwardOutlinedIcon />
                        <ArrowDownwardOutlinedIcon />
                    </div>

                    <RepeatOutlinedIcon />
                    <ChatBubbleOutlineOutlinedIcon />
                    <div className="post_footerLeft">
                        <ShareOutlined />
                        <MoreHorizOutlined />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Post
