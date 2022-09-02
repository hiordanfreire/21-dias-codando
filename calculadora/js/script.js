const telaResult = document.querySelector('.result');
const confirmar = document.querySelector('.igualdade');

function insert(valor){
  telaResult.innerHTML += valor; 
}

function clean() {
  telaResult.innerHTML = ' ';
}


function backspace(){
  if(telaResult.textContent ){
    let result = document.getElementById('resultado').innerHTML 
    telaResult.innerHTML = result.substring(0, telaResult.length - 1)
  }
}

function confirma() {
  if(resultado.textContent != 'Erro') {
      document.getElementById("resultado").innerHTML = eval(resultado.innerHTML)
  }
}