// Definir la interfaz con los métodos add() y rest()
interface BotManager {
    add(): void; // Método para añadir botones
    rest(): void; // Método para quitar botones
}

// Clase que representa un botón
class Boton {
    constructor(public id: number) {
        // El constructor solo necesita el ID para representar el botón
    }
}

// Clase principal que implementa BotManager
class GrupoBot implements BotManager {
    private contador: number = 0; // Contador para llevar el número de botones
    private container: JQuery<HTMLElement>; // Contenedor de botones dinámicos

    constructor(container: JQuery<HTMLElement>) {
        this.container = container;

        // Asignar controladores de eventos dinámicamente
        $("#addButton").on("click", () => this.add());
        $("#removeButton").on("click", () => this.rest());
    }

    // Método para añadir un botón
    add(): void {
        this.contador++; // Incrementar el contador
        const nuevoBoton = new Boton(this.contador); // Crear una nueva instancia de Boton

        // Crear el elemento HTML del botón dinámico
        const botonElemento = $("<button></button>")
            .text(`${nuevoBoton.id}`) // Texto del botón
            .attr("data-id", nuevoBoton.id) // Asignar un atributo único con el ID
            .on("click", () => {
                // Al pulsar el botón, mostrar un mensaje con su ID
                alert(`Hola desde ${nuevoBoton.id}`);
            });

        this.container.append(botonElemento); // Añadir el botón al contenedor
    }

    // Método para eliminar el último botón
    rest(): void {
        if (this.contador > 0) {
            // Buscar el último botón en el contenedor y eliminarlo
            const ultimoBoton = this.container.children("button").last();
            ultimoBoton.remove();

            this.contador--; // Reducir el contador
        } else {
            alert("No hay más botones para eliminar.");
        }
    }
}

// Inicialización al cargar el DOM
$(document).ready(() => {
    const container = $("#buttonContainer"); // Contenedor dinámico de botones
    const grupoBot = new GrupoBot(container); // Instancia única de GrupoBot
});
