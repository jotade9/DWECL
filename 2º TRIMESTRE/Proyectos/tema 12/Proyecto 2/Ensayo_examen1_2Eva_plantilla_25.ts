$(function () {
    interface Objeto {
        marca: string;
        modelo: string;
    }

    class FormHandler {
        private url: string;

        constructor(url: string) {
            this.url = url;
            this.initEventListeners();
        }

        private initEventListeners(): void {
            $("form").on("submit", (e) => this.handleSubmit(e));
        }

        private handleSubmit(e: any): void {
            e.preventDefault(); // Evitar el envío estándar del formulario.

            const marca = $("#marca").val() as string;
            const modelo = $("#modelo").val() as string;
            const datos: Objeto = { marca, modelo };

            // Puedes probar uno de estos métodos llamando al correspondiente:
            this.sendWithFetch(datos);
            // this.sendWithJQuery(datos);
            // this.sendWithFormData(datos);
            // this.sendWithAsyncAwait(datos);
        }

        private sendWithFetch(datos: Objeto): void {
            fetch(this.url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(datos),
            })
                .then((response) => response.json())
                .then((data) => {
                    this.displayMessage(data);
                })
                .catch((error) => console.error("Error con Fetch:", error));
        }

        private sendWithJQuery(datos: Objeto): void {
            $.post(this.url, datos, (data) => {
                this.displayMessage(data);
            }, "json");
        }

        private sendWithFormData(datos: Objeto): void {
            const formData = new FormData();
            formData.append("marca", datos.marca);
            formData.append("modelo", datos.modelo);

            $.ajax({
                url: this.url,
                type: "POST",
                data: formData,
                processData: false,
                contentType: false,
                success: (data) => {
                    this.displayMessage(data);
                },
                error: (error) => console.error("Error con FormData:", error),
            });
        }

        private async sendWithAsyncAwait(datos: Objeto): Promise<void> {
            try {
                const response = await fetch(this.url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(datos),
                });

                const data = await response.json();
                this.displayMessage(data);
            } catch (error) {
                console.error("Error con Async/Await:", error);
            }
        }

        private displayMessage(data: Objeto): void {
            $("#datos").html(`<h1>El coche es un ${data.marca} ${data.modelo}</h1>`);
        }
    }

    // Instanciamos la clase con la URL del servidor PHP.
    const formHandler = new FormHandler("Ensayo_examen1_2Eva_25.php");
});
