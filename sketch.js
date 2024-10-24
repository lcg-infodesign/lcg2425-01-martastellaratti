function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background("#c4c4c0");

  let opacita = 230;
  fill(113, 79, 61, opacita);
  noStroke();

  let altezza = 47; /* altezza rettangolo */
  let largh = 47; /* larghezza rettangolo */
  let gridSize = 470; /*dimensione griglia  px*/

  /* calcola colonne e righe in griglia */
  let col = Math.floor(gridSize / largh);
  let righe = Math.floor(gridSize / altezza);

  /* calcola le coordinate di partenza per centrare la griglia */
  let startX = (windowWidth - gridSize) / 2;
  let startY = (windowHeight - gridSize) / 2;

  for (let i = 0; i < col; i++) {
    for (let j = 0; j < righe; j++) {
      /* calcola la posizione con offset casuale */
      let xPos = startX + i * largh + random(-11.75, 11.75);
      let yPos = startY + j * altezza + random(-11.75, 11.75);

      /* disegna il rettangolo */
      rect(xPos, yPos, largh, altezza);
    }
  }
}

/* funzione che viene chiamata quando la finestra viene ridimensionata */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight); /* aggiorna le dimensioni canvas */
  redraw(); /* ridisegna la griglia con le nuove dimensioni */
}