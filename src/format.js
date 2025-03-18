export function format(
  textInput,
  isRemoveDots,
  isUppercase,
  isRemoveAccentsAndPunctuation,
  isRemoveDashes
) {
  try {
    let textFormatted;
    if (isRemoveDots) {
      textFormatted = textInput.replace(/[.]/g, "");
    }
    if (isRemoveDashes) {
      textFormatted = textFormatted.replace(/[-]/g, "");
    }
    if (isRemoveAccentsAndPunctuation) {
      textFormatted = removeAccentsAndPunctuation(textFormatted);
    }
    if (isUppercase) {
      textFormatted = textFormatted.toUpperCase();
    }
    return textFormatted;
  } catch (error) {
    alert("Erro ao processar text:", error);
  }
}
