import React, { PureComponent } from 'react';
declare global {
    interface Window { Twitch: any; }
}
const EMBED_URL = 'https://player.twitch.tv/js/embed/v1.js';
export class TwitchPlayer extends PureComponent<any, {}> {
    options = {
        width: 840,
        height: 470,
        video: 464060196,
        targetElementId: 'player',
        videoTime: 11488,
        autoplay: true
    };

    player: any = null;
    createEmbedAddListeners(targetElementId: string, props: any): void {
        this.player = new window.Twitch.Player(targetElementId, { ...props });
        this.player.setVideo(`v${props.video}`, props.videoTime);
        this.addEventListeners(props);
    }
    addEventListeners(props: any): void {
        // this.player.addEventListener(window.Twitch.Player.PLAY, () => {
        // })
        this.player.addEventListener(window.Twitch.Player.READY, () => {
            this.player.seek(props.videoTime);
            this.player.play();
        })
    }
    componentDidMount() {
        if (window.Twitch && window.Twitch.Player) {
            this.createEmbedAddListeners(this.options.targetElementId, this.options);
            return;
        }
        const script = document.createElement('script');
        script.setAttribute('src', EMBED_URL);
        script.addEventListener('load', () => {
            this.createEmbedAddListeners(this.options.targetElementId, this.options);
        });

        document.body.appendChild(script);
    }
    render() {
        return (
            <>
                <div id="player" className="player"></div>
            </>
        );
    };
}

