export function format(
  textInput,
  isRemoveDots,
  isUppercase,
  isRemoveAccentsAndPunctuation,
  isRemoveDashes
) {
  try {
    let textFormatted = textInput;
    if (isRemoveDots) {
      textFormatted = textFormatted.replace(/[.]/g, "");
    }
    if (isRemoveDashes) {
      textFormatted = textFormatted.replace(/[-/\\]/g, "");
    }
    if (isRemoveAccentsAndPunctuation) {
      textFormatted = textFormatted.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
    if (isUppercase) {
      textFormatted = textFormatted.toUpperCase();
    }
    return textFormatted;
  } catch (error) {
    alert("Erro ao processar text:", error);
  }
}
