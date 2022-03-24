import React from 'react';
import "../css/Feed.css";
import MitraBox from "./MitraBox"
import Post from "./Post"

function Feed() {
    return (
        <div className = "feed">
           <MitraBox />
           <Post />
           <Post />
           <Post />
           <Post />
           <Post />
           <Post />
        </div>
    )
}

export default Feed
