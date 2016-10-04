import React                    from 'react';
import { PlayButton, Progress } from 'react-soundplayer/components';
import { SoundPlayerContainer } from 'react-soundplayer/addons';

class Player extends React.Component {
    render() {
        return (
            <div className="player">
                <div className="player__playButton">
                    <i className="fa fa-play fa-lg"></i>
                </div>
                <div className="player__progress">
                    <div className="player__progressInner">
                    </div>
                </div>
                <div className="player__time">
                    00:10 / 00:26
                </div>
            </div>
        );
    }
}

export default Player;