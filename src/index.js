import { format } from "./format.js";

const autoFormatButton = document.getElementById("autoFormatButton");
autoFormatButton.addEventListener("click", () => {
  const textInput = document.getElementById("textToFormat").value;

  const textFormatted = format(textInput);

  document.getElementById("textToFormat").value = "";

  const formattedText = document.getElementById("formattedText");
  formattedText.innerText = textFormatted;
});

// Função de copiar texto formatado para área de transferência
const copyFormattedTextButton = document.getElementById("copyFormattedTextButton");
copyFormattedTextButton.addEventListener("click", () => {
  // Seleção do conteúdo formato apresentado na página
  const formattedText = document.getElementById("formattedText").textContent;

  // Copiar result formatado
  navigator.clipboard.writeText(formattedText);
});
