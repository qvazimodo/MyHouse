const src = "https://www.youtube.com/watch?v=h3gs0b38L4c";

const Video = () => {
    return (
        // <div className="video-section">
            <div className="video-block">
                <iframe width="320" height="180" src="https://www.youtube.com/embed/h3gs0b38L4c" title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
            </div>
        // </div>


    );
};

export default Video;

