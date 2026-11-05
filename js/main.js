// Obtener los botones
const btnProductos = document.getElementById("btnProductos");
const btnInventario = document.getElementById("btnInventario");
const btnCerrar = document.getElementById("btnCerrar");

// Ir a productos
btnProductos.addEventListener("click", function() {
    window.location.href = "productos.html";
});

// Ir a inventario
btnInventario.addEventListener("click", function() {
    window.location.href = "inventario.html";
});

// Cerrar sesión
btnCerrar.addEventListener("click", function() {
    window.location.replace("index.html");
});