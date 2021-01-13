"use strict";

var $bigBall = document.querySelector('.cursor__ball--big');
var $smallBall = document.querySelector('.cursor__ball--small');
var $hoverables = document.querySelectorAll('.hoverable'); // Listeners

document.body.addEventListener('mousemove', onMouseMove);

for (var i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
} // Move the cursor


function onMouseMove(e) {
  TweenMax.to($bigBall, .4, {
    x: e.pageX - 15,
    y: e.pageY - 15
  });
  TweenMax.to($smallBall, .1, {
    x: e.pageX - 5,
    y: e.pageY - 7
  });
} // Hover an element


function onMouseHover() {
  TweenMax.to($bigBall, .3, {
    scale: 4
  });
}

function onMouseHoverOut() {
  TweenMax.to($bigBall, .3, {
    scale: 1
  });
}

function menuAberto() {
  var element = document.getElementById("fechar-menu-acao");
  element.classList.toggle("abrir-menu");
}

function menuFechado() {
  var element = document.getElementById("fechar-menu-acao");
  element.classList.remove("abrir-menu");
}

function bikeAlerta() {
  var element = document.getElementById("overlay-bike");
  element.classList.toggle("abrir-bike");
}

function bikeAlertaClose() {
  var element = document.getElementById("overlay-bike");
  element.classList.remove("abrir-bike");
}

function funFact() {
  var element = document.getElementById("overlay-facts");
  element.classList.toggle("abrir-funfact");
}

function funFactClose() {
  var element = document.getElementById("overlay-facts");
  element.classList.remove("abrir-funfact");
}

function buttonClose() {
  var element = document.getElementById("no-button");
  element.classList.add("button-none");
}

var randomText = [];
randomText[0] = 'Já fui dublê da Paola Oliveira! Isso mesmo. <br>Em uma cena onde ela era atropelada na novela Cama de Gato. <br>Muitas pessoas não sabem, mas eu fazia uns bicos como dublê de ação, bons tempos :)';
randomText[1] = 'Fiz escotismo durante 10 anos. <br>Sim, já fui escoteiro. Sempre alerta!';
randomText[2] = 'Fiz Parkour durante 10 anos. Bora pular uns murinhos :D';
randomText[3] = 'Já fui campeão de judô e de jiu-jitsu.<br> Parei na faixa roxa.';
randomText[4] = 'Uso bicicleta como meio de transporte. <br>Temos que desmistificar que bicicleta é só para o lazer ;)';
randomText[5] = "Adoro viajar para países distantes <br> Quanto mais loge da minha origem, melhor!";
randomText[6] = 'Quase virei professor de educação física, <br>foi por pouco que não fui morar no campus da federal do RJ.';
randomText[7] = 'Trabalhei 2 anos como garçom ajudando meu pai e enquanto eu terminava um curso de computação gráfica,<br> depois daí, foi só dedicação exclusiva ao design.';
randomText[8] = 'Já entreguei rappi / über eats / ifood durante 3 meses para entender como era a jornada do entregador na prática.';
randomText[9] = 'Fiz meu primeiro site aos 12 anos. Estudava em um colégio público onde existia um pólo educativo. <br>Graças a professora Tânia Antunes, encontrei minha profissão logo cedo.';
randomText[10] = 'Gosto de filme que faz chorar, se não for pra sair em prantos, nem me chama.';
randomText[11] = 'Já fiz 2 filmes internacionais como dublê de ação, são eles: Hulk 2 e Os mercenários.';

var shuffleTitle = function shuffleTitle() {
  var id = Math.round(Math.random() * (randomText.length - 1));
  document.getElementById('randTitle').innerHTML = randomText[id];
};

newTitle();

function goBack() {
  window.history.back();
}