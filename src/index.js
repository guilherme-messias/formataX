// Função de formatação de texto

const autoFormatButton = document.getElementById("autoFormatButton");
autoFormatButton.addEventListener("click", () => {
  try {
    // Validação do texto inserido pelo usuário
    const text = document.getElementById("textToFormat").value;

    // Remove acentos e cedilhas
    const textWithoutAccents = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Remove traços, pontos e barras
    const textWithoutPunctuation = textWithoutAccents.replace(/[-./]/g, "");

    // Converte para maiúsculas
    const uppercaseText = textWithoutPunctuation.toUpperCase();

    // Limpar Campos
    document.getElementById("textToFormat").value = "";

    // Apresentação do result formatado
    const formattedText = document.getElementById("formattedText");
    formattedText.innerText = uppercaseText;
  } catch (error) {
    alert("Erro ao processar text:", error);
    // Exibir mensagem de erro para o usuário (opcional)
  }
});

// Função de copiar texto formatado para área de transferência
const copyFormattedTextButton = document.getElementById("copyFormattedTextButton");
copyFormattedTextButton.addEventListener("click", () => {
  // Seleção do conteúdo formato apresentado na página
  const formattedText = document.getElementById("formattedText").textContent;

  // Copiar result formatado
  navigator.clipboard.writeText(formattedText);
});
