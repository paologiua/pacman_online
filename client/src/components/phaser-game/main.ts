import Phaser from 'phaser';
import { GameScene } from './scenes/game.scene';

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 810,
	height: 690,
	parent: 'game-container',
	backgroundColor: '#ffffff',
	scene: GameScene,
};

const StartGame = (): Phaser.Game => {
	return new Phaser.Game(config);
}

export default StartGame;