export function format(textInput) {
  try {
    const textWithoutAccents = textInput.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const textWithoutPunctuation = textWithoutAccents.replace(/[-./]/g, "");
    const uppercaseText = textWithoutPunctuation.toUpperCase();

    return uppercaseText;
  } catch (error) {
    alert("Erro ao processar text:", error);
  }
}
