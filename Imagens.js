//variaveis imagens e sons do jogo
let imagemDaEstrada;
let imagemAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

//sons
let somTrilha;
let somColisao;
let somPontos;

function preload(){
  imagemDaEstrada = loadImage("Imagens/estrada.png");
  imagemAtor = loadImage("Imagens/ator-1.png");
  imagemCarro = loadImage("Imagens/carro-1.png");
  imagemCarro2 = loadImage("Imagens/carro-2.png");
  imagemCarro3 = loadImage("Imagens/carro-3.png");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3]
  
somTrilha = loadSound("Sons/trilha.mp3");
somPontos = loadSound("Sons/colidiu.mp3");
somColisao = loadSound("Sons/pontos.wav");
  
  }

