// Função de formatação de texto

const botaoFormatacao = document.getElementById("botaoFormatacao");
botaoFormatacao.addEventListener("click", () => {
  try {
    // Validação do texto inserido pelo usuário
    const texto = document.getElementById("texto").value;

    // Remove acentos e cedilhas
    const textoSemAcentos = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Remove traços, pontos e barras
    const textoSemTracosEPontos = textoSemAcentos.replace(/[-./]/g, "");

    // Converte para maiúsculas
    const textoMaiusculo = textoSemTracosEPontos.toUpperCase();

    // Limpar Campos
    document.getElementById("texto").value = "";

    // Apresentação do resultado formatado
    const resultado = document.getElementById("resultado");
    resultado.innerText = textoMaiusculo;
  } catch (error) {
    alert("Erro ao processar texto:", error);
    // Exibir mensagem de erro para o usuário (opcional)
  }
});

// Função de copiar texto formatado para área de transferência
const botaoCopiar = document.getElementById("botaoCopiar");
botaoCopiar.addEventListener("click", () => {
  // Seleção do conteúdo formato apresentado na página
  const resultado = document.getElementById("resultado").textContent;

  // Copiar resultado formatado
  navigator.clipboard.writeText(resultado);
});