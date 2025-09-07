import './index.css';
import gnome from './assets/gnome.png';
import { createBoard, createCharacter, placeCharacterInCell, startMoving } from './game';

const root = document.getElementById('root') || document.body;

const { grid, cells } = createBoard(root, 4);

const character = createCharacter(gnome);

const startIndex = Math.floor(Math.random() * cells.length);
placeCharacterInCell(character, cells, startIndex);

startMoving(character, cells, 1000);

if (typeof window !== 'undefined') {
  window._ahj = { grid, cells, character };
}
