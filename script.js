let nome = prompt('Qual o seu nome?')
let nota = prompt('Qual foi sua nota numeral?');

let scoreA = nota >= 90 && nota <= 100;
let scoreB = nota >= 80 && nota < 90;
let scoreC = nota >= 70 && nota < 80;
let scoreD = nota >= 60 && nota < 70;
let scoreF = nota < 60;



function findScore() {
    nome
    nota
  if (scoreA) {
    alert("Parabéns " + nome + ", você tirou um BELISSIMO A");
  } else if (scoreB) {
    alert("Parabéns " + nome + ", você tirou um B, o que é muito bom");
  } else if (scoreC) {
    alert("Olá " + nome + ", você tirou um C, tenho certeza que pode melhorar");
  } else if (scoreD) {
    alert("Olá " + nome + ", você tirou um D, vamos trabalhar juntos nessa evolução");
  } else if (scoreF) {
    alert("Olá " + nome + ", você tirou um F, é preocupante, mas estamos juntos nessa caminhada");
  } else {
    alert("Essa nota é invalida");
  }
}

findScore()