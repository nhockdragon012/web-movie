import './video.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

import YouTube from 'react-youtube';

function Video({videos,addClass, setClose }) {
    const opts = {
        height: '100%',
        width: '100%'
    };
    console.log();
    return (
        <div className={`modal-box ${addClass ? 'open' : ""}`}>
            <div className="modal-box__movie-trailer">
                <div className="close-modal-box" onClick={() => setClose(false)}><FontAwesomeIcon icon={faXmark} size={window.screen.width > 1024 ? "3x": "2x"}/></div>
                <div className="modal-box__container">
                    {addClass && videos.length > 0 && videos.map(video => {
                            return <div className="video-trailer-youtube" key={video.id}>
                            <YouTube 
                                videoId={video.key}
                                id={video.id}
                                title={video.name}
                                opts={opts}
                        /></div>
                        })
                    }
                </div>
            </div>
        </div>  
    )
}

export default Video