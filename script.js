function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  var nomeFilme = document.getElementById("nomeFilme").value;
  if (filmeFavorito.endsWith(".jpg")) {
    listarFilmesNaTela(filmeFavorito, nomeFilme);
  } else {
    console.error("Endereço de Filme invalido");
  }
  document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filme, nomeFilme) {
  var elementoFilmeFavorito = "<img src=" + filme + ">";
  var elementoNomeFilme = "<div class='tituloFilme'>" + nomeFilme + "</div>";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavorito + elementoNomeFilme;
}