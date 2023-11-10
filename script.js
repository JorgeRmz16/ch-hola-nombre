function cambiarNombre() {
    const nuevoNombre = prompt("Ingresa un nuevo nombre:");
    if (nuevoNombre !== null && nuevoNombre !== "") {
        document.getElementById("saludo").innerText = "Hola, " + nuevoNombre;
    }
}

