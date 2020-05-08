
export class Scene1 extends Phaser.Scene {
    constructor() {
        super('preloader');
    }

    preload() {
        
    }

    create() {
        this.scene.start('main');
    }

    loadAtlas() {

    }

}