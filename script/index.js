const textInput = document.getElementById('textInput');

function toUpperCase() {
  textInput.value = textInput.value.toUpperCase();
}

function toLowerCase() {
  textInput.value = textInput.value.toLowerCase();
}

function capitalizeWords() {
  const words = textInput.value.toLowerCase().split(' ');
  const capitalized = words.map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  );
  textInput.value = capitalized.join(' ');
}

function copyText() {
  textInput.select();
  document.execCommand('copy');
}

async function pasteText() {
  try {
    const text = await navigator.clipboard.readText();
    textInput.value += text;
  } catch (err) {
    alert('No se pudo pegar el texto: ' + err);
  }
}

function toggleTheme() {
  document.body.classList.toggle('dark');
}
