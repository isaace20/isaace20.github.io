// Email copy
document.getElementById('copyEmail').addEventListener('click', function(event) {
    event.preventDefault();

    // Crear un elemento de entrada de texto temporal //Create a temporary text input element
    var tempInput = document.createElement('input');
    tempInput.value = 'isaac.escobar.info22@gmail.com';
    document.body.appendChild(tempInput);

    // Seleccionar el texto dentro del campo de entrada//Select text within the input field
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); /* Para dispositivos móviles // For mobile devices*/

    // Copiar el texto al portapapeles//Copy text to clipboard
    document.execCommand('copy');

    // Eliminar el campo de entrada temporal//Delete temporary input field
    document.body.removeChild(tempInput);

    // Alerta o mensaje de confirmación // Alert or confirmation message
    alert('Mail copied to clipboard: ' + tempInput.value);
});


// Navbar 

