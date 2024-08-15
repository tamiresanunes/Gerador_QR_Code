/**
 * Seleção de elementos
 * Seleciona o container principal que envolve o formulário e a imagem do QR Code.
 * Seleciona o botão de geração de QR Code dentro do formulário.
 * Seleciona o campo de entrada de texto onde o usuário insere o conteúdo para gerar o QR Code.
 * Seleciona a imagem do QR Code onde o código gerado será exibido.
 */
const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = container.querySelector("#qr-form input");
const qrCodeImg = container.querySelector("#qr-code img");

/**
 * Função para gerar o código QR
 * Obtém o valor do campo de entrada de texto.
 * Se o campo estiver vazio, a função é encerrada.
 * Atualiza o texto do botão para indicar que o QR Code está sendo gerado.
 * Define a URL da imagem do QR Code utilizando uma API online para gerar o código.
 * Adiciona uma classe de estilo ao container e atualiza o texto do botão quando a imagem é carregada.
 */
function generateQrCode() {
  let qrCodeInputValue = qrCodeInput.value;

  if (!qrCodeInputValue) return;

  qrCodeBtn.innerText = "Gerando código...";

  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

  qrCodeImg.addEventListener("load", () => {
    container.classList.add("active");
    qrCodeBtn.innerText = "Código criado!";
  });
}

/**
 * Evento de clique no botão de gerar QR Code
 * Quando o botão é clicado, a função `generateQrCode` é chamada para gerar o código QR.
 */
qrCodeBtn.addEventListener("click", () => {
  generateQrCode();
});

/**
 * Evento de pressionar a tecla Enter no campo de entrada.
 * Se a tecla pressionada for "Enter", a função `generateQrCode` é chamada para gerar o código QR.
 */
qrCodeInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    generateQrCode();
  }
});

/**
 * Evento de digitação no campo de entrada
 * Quando o usuário digita no campo de entrada, verifica se o campo está vazio.
 * Se o campo estiver vazio, remove a classe de estilo do container e redefine o texto do botão.
 */
qrCodeInput.addEventListener("keyup", () => {
  if (!qrCodeInput.value) {
    container.classList.remove("active");
    qrCodeBtn.innerText = "Gerar QR Code";
  }
});
