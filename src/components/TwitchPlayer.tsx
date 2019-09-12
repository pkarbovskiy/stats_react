import React, { PureComponent } from 'react';
declare global {
    interface Window { Twitch: any; }
}
export interface TwitchPlayerOptions {
    video: number;
    videoTime: number;
    setVideoHandler: (player: any) => void;
    targetElementId?: string;
    autoplay?: boolean;
}
const EMBED_URL = 'https://player.twitch.tv/js/embed/v1.js';
export class TwitchPlayer extends PureComponent<{
    options: TwitchPlayerOptions
}, {}> {
    state = {
        options: {
            targetElementId: 'player',
            autoplay: true
        } as TwitchPlayerOptions
    }
    player: any = null;
    createEmbedAddListeners(): void {
        this.player = new window.Twitch.Player(this.state.options.targetElementId, { ...this.state.options });
        this.player.setVideo(`v${this.state.options.video}`, this.state.options.videoTime);
        this.addEventListeners();
    }
    addEventListeners(): void {
        this.props.options.setVideoHandler(this.player);
        this.player.addEventListener(window.Twitch.Player.READY, () => {
            this.player.seek(this.state.options.videoTime);
            this.player.play();
        })
    }
    componentDidMount() {
        this.setState({ options: Object.assign({}, this.state.options, this.props.options) });
        if (window.Twitch && window.Twitch.Player) {
            this.createEmbedAddListeners();
            return;
        }
        const script = document.createElement('script');
        script.setAttribute('src', EMBED_URL);
        script.addEventListener('load', () => {
            this.createEmbedAddListeners();
        });

        document.body.appendChild(script);
    }
    render() {
        return (
            <>
                <div id={this.state.options.targetElementId} className="player"></div>
            </>
        );
    };
}

