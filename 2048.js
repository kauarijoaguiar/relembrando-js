function somaIguais(aux) {
  for (var C = aux.length - 1; C >= 0; C--) {
    if (aux[C] == aux[C - 1] && aux[C] != '_') {
      aux.unshift('_');
      aux[C] = aux[C] + aux[C];
      aux.splice(C + 1, 1);
    }
  }
}
function movimento(tabuleiro,aux,I) {
  aux = [];
  for (var J = 0; J < 4; J++) {
    if (tabuleiro[I][J] != '_') {
      aux.push(tabuleiro[I][J]);
      somaIguais(aux);
    }
  }
  tabuleiro[I] = tabuleiro[I].concat(aux);
  for (J = 3; J >= 0; J--) {
    if (tabuleiro[I][J] != '_') {
      tabuleiro[I].splice(J,1);
    }
  }
}
function movimDireita(tabuleiro) {
  var aux;
  for (var I = 0; I < 4; I++) {
    movimento(tabuleiro,aux,I);
  }
}
function movimEsquerda(tabuleiro) {
  var aux;
  for (var I = 0; I < 4; I++) {
    tabuleiro[I].reverse();
    movimento(tabuleiro,aux,I);
    tabuleiro[I].reverse();
  }
}
function movimCima(tabuleiro) {
  var aux;
  var tabulaux = [[],[],[],[]];
  for (var I = 0; I < 4; I++) {
    for (var J = 0; J < 4; J++) {
      tabulaux[I].push(tabuleiro[J][I]);
    }
  }
  for (I = 0; I < 4; I++) {
    tabulaux[I].reverse();
    movimento(tabulaux,aux,I);
    tabulaux[I].reverse();
  }
  for (var I = 0; I < 4; I++) {
    for (var J = 0; J < 4; J++) {
      tabuleiro[I].push(tabulaux[J][I]);
      tabuleiro[I].shift();
    }
  }
}
function movimBaixo(tabuleiro) {
  var aux;
  var tabulaux = [[],[],[],[]];
  for (var I = 0; I < 4; I++) {
    for (var J = 0; J < 4; J++) {
      tabulaux[I].push(tabuleiro[J][I]);
    }
  }
  for (I = 0; I < 4; I++) {
    movimento(tabulaux,aux,I);
  }
  for (var I = 0; I < 4; I++) {
    for (var J = 0; J < 4; J++) {
      tabuleiro[I].push(tabulaux[J][I]);
      tabuleiro[I].shift();
    }
  }
}
function mostraTab(tabu) { 
  var tabu_aux = [];
  for (var L = 0; L < 4; L++) { 
    tabu_aux[L] = tabu[L].join(' '); 
  } 
  return tabu_aux.join('\n');
}
var v=[
  ["_","_","_","_"],
  ["_","_","_","_"],
  ["_","_","_","_"],
  ["_","_","_","_"],
];
function sortumdois(){
var v1=[2,2,4,2,2,2,4];
var s=Math.floor(Math.random()*7);
 //console.log(s);
return valor=v1[s];
}
function sla(){
var p1=Math.floor(Math.random()*4);
var p2=Math.floor(Math.random()*4);
sorteio=2
v[p1][p2] = valor;
//console.log(valor)
}
function valoral(){
var v1=[2,2,4,2,2,2,4];
var s=Math.floor(Math.random()*7);
 //console.log(s);
return valor=v1[s];
}
function posi(){
var p1=Math.floor(Math.random()*4);
var p2=Math.floor(Math.random()*4);
sorteio=2
v[p1][p2] = valor;
//console.log(valor)
}
while(true){
  var j=parseInt(prompt("eai, vamos começar?\n1-sim\n2-regras\n3-não"));
  if(j==1){
for(c=0;c<2;c++){
sortumdois()
sla()
}
//var p = parseInt(prompt(mostraTab(v)));
while(true){
for(c=0;c<1;c++){
  valoral()
posi()
}
console.log(v)
var p = parseInt(prompt(mostraTab(v)));
switch(p) {
    case 5: movimCima(v); break;
    case 1: movimEsquerda(v); break;
    case 2: movimBaixo(v); break;
    case 3: movimDireita(v); break;
}
}
  }if(j==2){
alert("Use as setas do teclado para movimentar os blocos;\nQuando dois blocos de números iguais se chocam, eles viram um só com valor igual a soma dos dois;\nA cada movimento é acrescentado um bloco com valor 2 ou com valor 4 (menor probabilidade);\nVocê ganha quando conseguir um bloco no valor de 2048.");
continue;
  }if(j==3){
    alert("ta né!");
    break;
  }
}
