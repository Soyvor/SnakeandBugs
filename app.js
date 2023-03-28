const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const ROWS = 20;
const COLS = 20;
const CELL_SIZE = canvas.width / COLS;

function drawGrid() {
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            ctx.strokeRect(j * CELL_SIZE, i * CELL_SIZE, CELL_SIZE, CELL_SIZE);
        }
    }
}

drawGrid();
