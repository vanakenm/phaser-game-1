import Phaser from 'phaser';
import logoImg from './assets/logo.png';

class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('logo', logoImg);
        this.load.image("tiles", "src/assets/floortileset.png");
    }
    
    create ()
    {
        const mapArray = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
        const map = this.make.tilemap({ data: mapArray, tileWidth: 32, tileHeight: 32 });
        map.addTilesetImage("tiles");
        const layer = map.createLayer(0, "tiles", 0, 0);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: MyGame
};

const game = new Phaser.Game(config);
