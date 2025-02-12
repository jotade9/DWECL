// Definimos una interfaz Art que representa un artículo con sus propiedades
interface Art {
    id: number;
    cod: string;
    color: string;
    piel: string;
}

// Clase Articulos encargada de gestionar la lista de artículos
class Articulos {
    constructor() {
        // Al instanciar la clase, se cargan los artículos iniciales
        this.getArticulos();

        // Se asigna un evento al formulario con id "f1" para manejar su envío
        $("#f1").on("submit", (event) => {
            event.preventDefault(); // Evita que la página se recargue
            this.pushArticulo(); // Agrega un nuevo artículo
        });
    }

    // Método para obtener la lista de artículos desde el servidor
    private getArticulos(): void {
        $.getJSON("/getArticulos", (data: Art[]) => {
            this.renderArticulos(data); // Renderiza los artículos en la tabla
        });
    }

    // Método para agregar un nuevo artículo enviando los datos al servidor
    private pushArticulo(): void {
        // Se obtienen los valores de los inputs del formulario
        const cod = $("#cod").val() as string;
        const color = $("#color").val() as string;
        const piel = $("#piel").val() as string;

        // Se envían los datos mediante una petición GET a "/pushArticulos"
        $.getJSON("/pushArticulos", { cod, color, piel }, (data: Art[]) => {
            this.renderArticulos(data); // Actualiza la tabla con los nuevos datos
        });

        // Resetea el formulario después de enviar los datos
        ($("#f1")[0] as HTMLFormElement).reset();
    }

    // Método para renderizar los artículos en una tabla HTML
    private renderArticulos(data: Art[]): void {
        let filas = ""; // Variable para almacenar el contenido de la tabla
        data.forEach((articulo) => {
            filas += `<tr>
                        <td>${articulo.id}</td>
                        <td>${articulo.cod}</td>
                        <td>${articulo.color}</td>
                        <td>${articulo.piel}</td>
                    </tr>`;
        });
        $("#carteras").html(filas); // Se actualiza el contenido de la tabla
    }
}

// Se ejecuta el código una vez que el documento ha cargado completamente
$(document).ready(() => {
    new Articulos(); // Se instancia la clase para iniciar la funcionalidad
});
