import { format } from "./format.js";

const autoFormatButton = document.getElementById("autoFormatButton");
const copyFormattedTextButton = document.getElementById("copyFormattedTextButton");

autoFormatButton.addEventListener("click", () => {
  const textInput = document.getElementById("textToFormat").value;
  document.getElementById("textToFormat").value = "";

  const textFormatted = format(textInput);

  const formattedText = document.getElementById("formattedText");
  formattedText.innerText = textFormatted;
});

copyFormattedTextButton.addEventListener("click", () => {
  const formattedText = document.getElementById("formattedText").textContent;
  navigator.clipboard.writeText(formattedText);
});
