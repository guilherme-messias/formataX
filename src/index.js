import { format } from './format.js';

const autoFormatButton = document.getElementById('autoFormatButton');
const copyFormattedTextButton = document.getElementById(
  'copyFormattedTextButton'
);
let copyFeedbackTimeoutId;

function setCopyFeedback(isCopied) {
  copyFormattedTextButton.textContent = isCopied ? '✓ Copiado!' : 'Copiar';
  copyFormattedTextButton.classList.toggle('btn-success', isCopied);
  copyFormattedTextButton.disabled = isCopied;
}

autoFormatButton.addEventListener('click', () => {
  const textInput = document.getElementById('textToFormat').value;

  const removeDots = document.getElementById('removeDots').checked;
  const uppercase = document.getElementById('uppercase').checked;
  const removeAccentsAndPunctuation = document.getElementById(
    'removeAccentsAndPunctuation'
  ).checked;
  const removeDashes = document.getElementById('removeDashes').checked;

  const isRemoveDots = removeDots ? true : null;
  const isUppercase = uppercase ? true : null;
  const isRemoveAccentsAndPunctuation = removeAccentsAndPunctuation
    ? true
    : null;
  const isRemoveDashes = removeDashes ? true : null;

  const textFormatted = format(
    textInput,
    isRemoveDots,
    isUppercase,
    isRemoveAccentsAndPunctuation,
    isRemoveDashes
  );

  const formattedText = document.getElementById('formattedText');
  formattedText.innerText = textFormatted;

  setTimeout(() => {
    document.getElementById('textToFormat').value = '';
  }, 3000);
});

copyFormattedTextButton.addEventListener('click', async () => {
  const formattedText = document.getElementById('formattedText').textContent;
  try {
    await navigator.clipboard.writeText(formattedText);

    clearTimeout(copyFeedbackTimeoutId);
    setCopyFeedback(true);

    copyFeedbackTimeoutId = window.setTimeout(() => {
      setCopyFeedback(false);
    }, 2000);
  } catch (error) {
    console.error('Erro ao copiar o texto formatado:', error);
  }
});
