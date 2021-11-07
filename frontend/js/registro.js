function limpiar() {
    var inputs = ["inputNombre", "inputApellido", "inputNumeroDocumento", "inputTelefono"];
    for (let i = 0; i < inputs.length; i++) {
        document.getElementById(inputs[i]).value = "";
        document.getElementById("span" + i).innerHTML = "x";
    }
    vistaPrevia();
}

function vistaPrevia() {

    var inputs = ["inputNombre", "inputApellido", "selectTipoDocumento", "inputNumeroDocumento", "inputTelefono"];
    var ids = ["nombreEscrito", "apellidoEscrito", "tipoDocEscrito", "numDocEscrito", "telefonoEscrito"];
    for (let i = 0; i < inputs.length; i++) {
        var idX = document.getElementById(inputs[i]).value;
        if (idX != "") {
            document.getElementById(ids[i]).innerHTML = idX;
            if (i == 2) {
                document.getElementById("span" + i).innerHTML = "x";
            } else {
                if (i > 2) {
                    document.getElementById("span" + (i - 1)).innerHTML = "Ok";
                } else {
                    document.getElementById("span" + i).innerHTML = "Ok";
                }
            }

        } else {
            document.getElementById(ids[i]).innerHTML = "Sin Escribir";
        }

    }
}