export function createBoard(container, size = 4) {
  const grid = document.createElement('div');
  grid.className = 'grid';

  const cells = [];
  const total = size * size;
  for (let i = 0; i < total; i += 1) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.dataset.index = String(i);
    grid.append(cell);
    cells.push(cell);
  }

  container.append(grid);
  return { grid, cells };
}

export function createCharacter(src) {
  const img = document.createElement('img');
  img.className = 'character';
  img.src = src;
  img.alt = 'gnome';
  return img;
}

export function getRandomDifferent(current, max) {
  if (max <= 1) return 0;
  let next = current;
  while (next === current) {
    next = Math.floor(Math.random() * max);
  }
  return next;
}

export function placeCharacterInCell(character, cells, index) {
  cells[index].appendChild(character);
}

export function startMoving(character, cells, interval = 1000) {
  let currentIndex = cells.findIndex((c) => c.contains(character));
  if (currentIndex === -1) currentIndex = 0;

  const id = setInterval(() => {
    const next = getRandomDifferent(currentIndex, cells.length);
    placeCharacterInCell(character, cells, next);
    currentIndex = next;
  }, interval);

  return id;
}
