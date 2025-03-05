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
    function funAjax(e) {
        e.preventDefault(); // Para no abandonar la página al enviar formulario.
        const marca = $("#marca").val();
        const modelo = $("#modelo").val();
        const datos = { marca, modelo };
        const url = "Ensayo_examen1_2Eva_25.php";
        //--------------------- Ajax Con Promesas --------------------------------------------------------
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(datos),
        })
            .then((response) => response.json())
            .then((data) => {
            $("#datos").html(`<h1>El coche es un ${data.marca} ${data.modelo}</h1>`);
        })
            .catch((error) => console.error("Error con Fetch:", error));
        //-----------------------------------------------------------------------------------
        // ----------------------Ajax Con jQuery-------------------------------------------------
        $.post(url, datos, function (data) {
            $("#datos").html(`<h1>El coche es un ${data.marca} ${data.modelo}</h1>`);
        }, "json");
        //---------------------------------------------------------------------------------------
        // -------------Enviando el formulario usando FormData-------------------------
        const formData = new FormData();
        formData.append("marca", marca);
        formData.append("modelo", modelo);
        $.ajax({
            url: url,
            type: "POST",
            data: formData,
            processData: false,
            contentType: false,
            success: function (data) {
                $("#datos").html(`<h1>El coche es un ${data.marca} ${data.modelo}</h1>`);
            },
            error: function (error) {
                console.error("Error con FormData:", error);
            },
        });
        //----------------------------------------------------------------------------------
        // ----------------------Usando Async/Await-------------------------
        function sendAsync() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const response = yield fetch(url, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(datos),
                    });
                    const data = yield response.json();
                    $("#datos").html(`<h1>El coche es un ${data.marca} ${data.modelo}</h1>`);
                }
                catch (error) {
                    console.error("Error con Async/Await:", error);
                }
            });
        }
        sendAsync();
        //----------------------------------------------------------------------------------
    }
    $('form').on('submit', funAjax);
});
