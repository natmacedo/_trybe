
const estados = [ 'Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo',
'Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco',
'Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];
const list=document.getElementById("lista-estados");
let container=document.getElementsByTagName('select');


function criarEstados() {
  for (let i = 0; i < estados.length; i += 1) {
    const listEstado = document.createElement('option');
    listEstado.innerText = estados[i][0];
    listEstado.value = estados[i][1];
    list.appendChild(listEstado);
  }
}

window.onload = function () {
  criarEstados();
}

//function preventDefault() 
