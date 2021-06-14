
function setup() {
  createCanvas(500, 400);
  somTrilha.loop(0,1,0.2);
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltainiciocarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}

