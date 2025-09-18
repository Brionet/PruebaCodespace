document.getElementById('personaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const datos = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        edad: parseInt(document.getElementById('edad').value, 10),
        dni: document.getElementById('dni').value
    };
    fetch('/persona/ficha', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('respuesta').textContent = data;
    })
    .catch(error => {
        document.getElementById('respuesta').textContent = 'Error: ' + error;
    });
});
