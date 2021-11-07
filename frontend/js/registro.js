function guardar() {
    var mensaje = confirm("Los datos se guardaran...");
    if (mensaje) {
        alert("Esta es una prueba, en realidad no se guardó nada");
    } else {
        alert("¡Cancelado!");
    }
}

function vistaPrevia() {

    var inputs = ["inputNombre", "inputApellido", "selectTipoDocumento", "inputNumeroDocumento", "inputTelefono", "selectTipoVehiculo", "inputPlacaVehiculo"];
    var ids = ["nombreEscrito", "apellidoEscrito", "tipoDocEscrito", "numDocEscrito", "telefonoEscrito", "tipoVehEscrito", "placaEscrito"];
    for (let i = 0; i < inputs.length; i++) {
        var idX = document.getElementById(inputs[i]).value;
        if (idX != "") {
            document.getElementById(ids[i]).innerHTML = idX;
        } else {
            document.getElementById(ids[i]).innerHTML = "Sin Escribir";
        }

    }
}