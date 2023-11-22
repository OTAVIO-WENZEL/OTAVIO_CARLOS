/* alternar cor da pagina */

var coresAlternadas = false;

    function alternarCores() {
      var body = document.body;
      var divsSombra = document.querySelectorAll('.img');
        
      if (coresAlternadas) {
        body.style.backgroundColor = '#000020';
        body.style.color = '#f0f8ff';
          
        divsSombra.forEach(function(div) {
          div.style.boxShadow = '0px 0px 10px rgba(255, 255, 255, 0.5)';
        });
      } else {
        body.style.backgroundColor = '#f0f8ff';
        body.style.color = '#000020';
          
        divsSombra.forEach(function(div) {
          div.style.boxShadow = '0px 0px 10px rgba(0, 0, 50, 0.5)';
        });
      }
        
      coresAlternadas = !coresAlternadas;
    }

/* page extra */

function mostrarImagem() {
  var select = document.getElementById("astros");
  var imagem = document.getElementById("imagem-astro");
  var nomeAstro = "";

  var opcoes = select.options;

  for (var i = 0; i < opcoes.length; i++) {
    if (opcoes[i].selected) {
      switch (opcoes[i].value) {
        case "sol":
          imagem.src = "../img/extra/sol.jpeg";
          nomeAstro = "Sol";
          break;
        case "mercurio":
          imagem.src = "../img/extra/mercurio.jpeg";
          nomeAsteo = "Mercúrio";
          break;
        case "venus":
          imagem.src = "../img/extra/venus.jpeg";
          nomeAstro = "Vênus";
          break;
        case "terra":
          imagem.src = "../img/extra/terra.jpeg";
          nomeAstro = "Terra";
          break;
        case "marte":
          imagem.src = "../img/extra/marte.jpeg";
          nomeAstro = "Marte";
          break;
        case "jupiter":
          imagem.src = "../img/extra/jupiter.jpeg";
          nomeAstro = "Júpiter";
          break;
        case "saturno":
          imagem.src = "../img/extra/saturno.jpeg";
          nomeAstro = "Saturno";
          break;
        case "urano":
          imagem.src = "../img/extra/urano.jpeg";
          nomeAstro = "Urano";
          break;
        case "netuno":
          imagem.src = "../img/extra/netuno.jpeg";
          nomeAstro = "Netuno";
          break;
        case "plutao":
          imagem.src = "../img/extra/plutao.jpeg";
          nomeAstro = "Plutão";
          break;
        default:
          imagem.src = "../img/extra/none.png";
          nomeAstro = "Extra";
      }
      break;
    }
  }

  atualizarTitulo(nomeAstro);
}

function atualizarTitulo(nomeAstro) {
  /*var titulo = "Planeta: ";*/
  document.title = nomeAstro;
}


/* rodape: voltar ao topo */

document.addEventListener('DOMContentLoaded', function() {
  var linkVoltarAoTopo = document.getElementById('voltar-ao-topo');

  linkVoltarAoTopo.addEventListener('click', function(event) {
    event.preventDefault();
    scrollToTop();
  });

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
});