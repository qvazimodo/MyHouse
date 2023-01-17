import React from 'react';
import style from "../../css/video.css";

const src = "https://www.youtube.com/watch?v=h3gs0b38L4c";

const Video = () => {
    return (

            <div className="video-block" style={{style}}>
                <iframe className="video_name"
                        width="640"
                        height="360"
                        src="https://www.youtube.com/embed/h3gs0b38L4c"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
            </div>

    );
};

export default Video;

