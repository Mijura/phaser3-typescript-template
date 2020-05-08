import "phaser";
import { Scene1 } from './scenes/Scene1';

var width = window.screen.availWidth - (window.outerWidth - window.innerWidth);
var height = window.screen.availHeight - (window.outerHeight - window.innerHeight);

const config = {
    type: Phaser.AUTO,
    width: width,
    height: height,
    scale: {
        mode: Phaser.Scale.RESIZE,
        parent: 'phaser-example',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: width,
        height: height
    },
    dom: {
        createContainer: true
    },
    scene: [Scene1]
};

const game = new Phaser.Game(config);