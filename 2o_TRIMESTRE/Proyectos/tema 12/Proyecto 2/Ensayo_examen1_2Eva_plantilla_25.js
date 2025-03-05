"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
$(function () {
    class FormHandler {
        constructor(url) {
            this.url = url;
            this.initEventListeners();
        }
        initEventListeners() {
            $("form").on("submit", (e) => this.handleSubmit(e));
        }
        handleSubmit(e) {
            e.preventDefault(); // Evitar el envío estándar del formulario.
            const marca = $("#marca").val();
            const modelo = $("#modelo").val();
            const datos = { marca, modelo };
            // Puedes probar uno de estos métodos llamando al correspondiente:
            this.sendWithFetch(datos);
            // this.sendWithJQuery(datos);
            // this.sendWithFormData(datos);
            // this.sendWithAsyncAwait(datos);
        }
        sendWithFetch(datos) {
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
        sendWithJQuery(datos) {
            $.post(this.url, datos, (data) => {
                this.displayMessage(data);
            }, "json");
        }
        sendWithFormData(datos) {
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
        sendWithAsyncAwait(datos) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const response = yield fetch(this.url, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(datos),
                    });
                    const data = yield response.json();
                    this.displayMessage(data);
                }
                catch (error) {
                    console.error("Error con Async/Await:", error);
                }
            });
        }
        displayMessage(data) {
            $("#datos").html(`<h1>El coche es un ${data.marca} ${data.modelo}</h1>`);
        }
    }
    // Instanciamos la clase con la URL del servidor PHP.
    const formHandler = new FormHandler("Ensayo_examen1_2Eva_25.php");
});
