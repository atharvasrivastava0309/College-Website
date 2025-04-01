import React, { useRef } from 'react'; // Import necessary React hooks
import './VideoPlayer.css'; // Import associated styles
import videoo from '../../assets/videoo.mp4'; // Import video asset

/**
 * VideoPlayer Component
 * This component renders a video player that can be toggled on and off.
 * Clicking outside the video player will close it.
 * 
 * @param {boolean} playState - Controls the visibility of the video player
 * @param {function} setPlayState - Function to update the playState
 */
const VideoPlayer = ({ playState, setPlayState }) => {
    const player = useRef(null); // Create a reference for the video player container
    
    /**
     * Handles closing the video player when clicking outside the video.
     * @param {Event} e - Click event
     */
    const closePlayer = (e) => {
        if (e.target === player.current) {
            setPlayState(false); // Update state to hide video player
        }
    }  
  
    return (
        <div 
            className={`video-player ${playState ? '' : 'hide'}`} // Conditionally hide/show player
            ref={player} // Attach reference to div container
            onClick={closePlayer} // Close player when clicking outside the video
        >
            <video src={videoo} autoPlay muted controls></video> {/* Video player element */}
        </div>
    );
};

export default VideoPlayer; // Export the component