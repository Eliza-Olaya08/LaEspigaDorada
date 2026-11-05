/* Lista inicial de ingredientes */
let ingredientes = [
    { nombre: "Harina de trigo", cantidad: 25, unidad: "kg" },
    { nombre: "Azúcar", cantidad: 10, unidad: "kg" },
    { nombre: "Mantequilla", cantidad: 8, unidad: "kg" },
    { nombre: "Levadura", cantidad: 2, unidad: "kg" },
    { nombre: "Sal", cantidad: 5, unidad: "kg" },
    { nombre: "Queso", cantidad: 6, unidad: "kg" },
    { nombre: "Huevos", cantidad: 60, unidad: "unidades" },
    { nombre: "Leche", cantidad: 12, unidad: "litros" }
];

// Obtener los elementos del HTML
const nombre = document.getElementById("nombre");
const cantidad = document.getElementById("cantidad");
const unidad = document.getElementById("unidad");

const btnAgregar = document.getElementById("btnAgregar");
const btnCancelar = document.getElementById("btnCancelar");
const btnVolver = document.getElementById("btnVolver");

const listaIngredientes = document.getElementById("listaIngredientes");

// Variable para saber si estamos editando un ingrediente
let indiceEditar = -1;


// Mostrar los ingredientes en la tabla
function mostrarIngredientes() {

    listaIngredientes.innerHTML = "";

    for (let i = 0; i < ingredientes.length; i++) {

        listaIngredientes.innerHTML += `
            <tr>
                <td>${ingredientes[i].nombre}</td>
                <td>${ingredientes[i].cantidad}</td>
                <td>${ingredientes[i].unidad}</td>
                <td>
                    <button onclick="editarIngrediente(${i})">
                        Editar
                    </button>

                    <button onclick="eliminarIngrediente(${i})">
                        Eliminar
                    </button>
                </td>
            </tr>
        `;

    }

}


// Agregar o actualizar un ingrediente
btnAgregar.addEventListener("click", function() {

    const nuevoNombre = nombre.value.trim();
    const nuevaCantidad = parseFloat(cantidad.value);
    const nuevaUnidad = unidad.value;

    // Validar los datos
    if (nuevoNombre === "" || cantidad.value === "" ||
        !Number.isFinite(nuevaCantidad) || nuevaCantidad <= 0) {

        alert("Por favor, ingresa datos válidos.");

        return;
    }

    // Verificar si estamos editando
    if (indiceEditar === -1) {

        // CREATE: Agregar ingrediente
        ingredientes.push({
            nombre: nuevoNombre,
            cantidad: nuevaCantidad,
            unidad: nuevaUnidad
        });

        alert("Ingrediente agregado correctamente.");

    } else {

        // UPDATE: Actualizar ingrediente
        ingredientes[indiceEditar] = {
            nombre: nuevoNombre,
            cantidad: nuevaCantidad,
            unidad: nuevaUnidad
        };

        alert("Ingrediente actualizado correctamente.");

        indiceEditar = -1;

        btnAgregar.textContent = "Agregar ingrediente";
        btnCancelar.style.display = "none";

    }

    // Limpiar el formulario
    nombre.value = "";
    cantidad.value = "";
    unidad.value = "kg";

    // Actualizar la tabla
    mostrarIngredientes();

});


// EDIT: Cargar los datos para modificarlos
function editarIngrediente(indice) {

    nombre.value = ingredientes[indice].nombre;
    cantidad.value = ingredientes[indice].cantidad;
    unidad.value = ingredientes[indice].unidad;

    indiceEditar = indice;

    btnAgregar.textContent = "Guardar cambios";
    btnCancelar.style.display = "block";

}


// DELETE: Eliminar un ingrediente
function eliminarIngrediente(indice) {

    const confirmar = confirm("¿Deseas eliminar este ingrediente?");

    if (confirmar) {

        ingredientes.splice(indice, 1);

        mostrarIngredientes();

        alert("Ingrediente eliminado correctamente.");

    }

}


// Cancelar una edición
btnCancelar.addEventListener("click", function() {

    indiceEditar = -1;

    nombre.value = "";
    cantidad.value = "";
    unidad.value = "kg";

    btnAgregar.textContent = "Agregar ingrediente";
    btnCancelar.style.display = "none";

});


// Volver al menú principal
btnVolver.addEventListener("click", function() {

    window.location.href = "main.html";

});


// Mostrar los ingredientes al abrir la página
mostrarIngredientes();