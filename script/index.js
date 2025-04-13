//FUNCIÓN: Alternar Tema Claro/Oscuro | Fucntion: Toggle Light/Dark Theme

function toggleTheme() {
  const html = document.documentElement;
  const button = document.querySelector('.theme-toggle');

  // Cambia la clase del tema en el elemento raíz | Change the theme class on the root element
  html.classList.toggle('dark-theme');

  // Verifica si está en modo oscuro para cambiar el texto del botón | Check if in dark mode to change the button text
  const isDark = html.classList.contains('dark-theme');
  button.innerHTML = isDark ? '☀️ Modo Claro' : '🌑 Modo Oscuro';
}

//Funciones De TransformacióN De Texto | Functions For Text Transformation

// Convierte el texto a mayúsculas | Converts text to uppercase
function toUpperCase() {
  const input = document.getElementById('textInput');
  input.value = input.value.toUpperCase();
}

// Convierte el texto a minúsculas | Converts text to lowercase
function toLowerCase() {
  const input = document.getElementById('textInput');
  input.value = input.value.toLowerCase();
}

// Capitaliza la primera letra de cada palabra | Capitalizes the first letter of each word  
function capitalizeWords() {
  const input = document.getElementById('textInput');
  input.value = input.value
    .toLowerCase()
    .replace(/\b\w/g, char => char.toUpperCase());
}

//Funciones De Portapapeles | Clipboard Functions

// Pega texto del portapapeles al área de texto | Pastes text from the clipboard to the text area
async function pasteText() {
  try {
    const text = await navigator.clipboard.readText();
    document.getElementById('textInput').value += text;
  } catch (err) {
    alert('No se pudo pegar el texto: ' + err);
  }
}

// Copia el contenido del área de texto al portapapeles | Copies the content of the text area to the clipboard
function copyText() {
  const input = document.getElementById('textInput');
  input.select();

  navigator.clipboard.writeText(input.value)
    .then(() => {
      showToast('Texto copiado al portapapeles');
    })
    .catch(err => {
      showToast('Error al copiar: ' + err, true);
    });
}

// FUNCIÓN: Mostrar Notificación (Toast) | FUNCTION: Show Notification (Toast)

function showToast(message, isError = false) {
  const toast = document.createElement('div');
  toast.className = 'toast' + (isError ? ' error' : '');
  toast.textContent = message;

  const container = document.getElementById('toast-container');
  container.appendChild(toast);

  // Elimina el toast después de 3 segundos | Remove the toast after 3 seconds
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// Borra el contenido del área de texto | Clears the text area
function clearText() {
  const input = document.getElementById('textInput');
  input.value = '';
  showToast('Texto borrado');
}
