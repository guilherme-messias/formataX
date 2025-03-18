import { format } from "./format.js";

const autoFormatButton = document.getElementById("autoFormatButton");
const copyFormattedTextButton = document.getElementById("copyFormattedTextButton");

autoFormatButton.addEventListener("click", () => {
  const textInput = document.getElementById("textToFormat").value;
  document.getElementById("textToFormat").value = "";

  const removeDots = document.getElementById("removeDots").checked;
  const uppercase = document.getElementById("uppercase").checked;
  const removeAccentsAndPunctuation = document.getElementById(
    "removeAccentsAndPunctuation"
  ).checked;
  const removeDashes = document.getElementById("removeDashes").checked;

  const isRemoveDots = removeDots ? true : null;
  const isUppercase = uppercase ? true : null;
  const isRemoveAccentsAndPunctuation = removeAccentsAndPunctuation ? true : null;
  const isRemoveDashes = removeDashes ? true : null;

  const textFormatted = format(
    textInput,
    isRemoveDots,
    isUppercase,
    isRemoveAccentsAndPunctuation,
    isRemoveDashes
  );

  const formattedText = document.getElementById("formattedText");
  formattedText.innerText = textFormatted;
});

copyFormattedTextButton.addEventListener("click", () => {
  const formattedText = document.getElementById("formattedText").textContent;
  navigator.clipboard.writeText(formattedText);
});
