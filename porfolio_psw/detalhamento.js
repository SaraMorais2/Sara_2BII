// VLibras

new window.VLibras.Widget ('https://vlibras.gov.br/app');

// Validação do formulário
function validarFormulario() {
    // Limpa qualquer mensagem de erro anterior
    document.getElementById("erro").innerHTML = "";
  
    // Obtém os valores dos campos
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const assunto = document.getElementById("assunto").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
  
    // Limite de caracteres para a mensagem
    const limiteMensagem = 1000;
  
    // Validação do nome
    if (nome === "") {
      mostrarErro("Por favor, insira seu nome.");
      return false;
    }
  
    // Validação do email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !regexEmail.test(email)) {
      mostrarErro("Por favor, insira um e-mail válido.");
      return false;
    }
  
    // Validação do assunto
    if (assunto === "") {
      mostrarErro("Por favor, insira o assunto.");
      return false;
    }
  
    // Validação da mensagem
    if (mensagem === "") {
      mostrarErro("Por favor, insira sua mensagem.");
      return false;
    }
  
    // Verificar limite de caracteres da mensagem
    if (mensagem.length > limiteMensagem) {
      mostrarErro("A mensagem não pode ultrapassar ${limiteMensagem} caracteres.);
      return false;
    }
  
    // Se todos os campos estiverem válidos, retorna true
    return true;
  }
  
  function mostrarErro(mensagem) {
    document.getElementById("erro").innerHTML = <p style="color: red;">${mensagem}</p>;
  }

// Carrossel de clientes
$(document).ready(function(){
    $(".testimonial-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: false,  
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000, // Roda a cada 4 segundos
        autoplayHoverPause: true,
        responsive:{
            0:{ items:1 },   // 1 item em telas pequenas
            600:{ items:2 }, // 2 itens em telas médias
            1000:{ items:3 }, // 3 itens em telas maiores
            1200:{ items:4 } // 4 itens em telas grandes
        }
    });
});

// Condição para exibir o botão
window.onscroll = function(){
    scroll();
};

// Função para verificar a posição de rolagem
function scroll(){
    var btn = document.getElementById("btnTop");
    var scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
    if(scrollPos > 200){
        btn.style.display = "block";
    } else {
        btn.style.display = "none";  
    }
}

// Função para voltar ao topo
function backToTop(){
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0; // Para navegadores mais antigos
    }


