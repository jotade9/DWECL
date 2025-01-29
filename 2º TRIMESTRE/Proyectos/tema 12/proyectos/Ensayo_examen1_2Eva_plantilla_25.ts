$(function () {
    interface Objeto {
        marca: string;
        modelo: string;
    }

    function funAjax(e: any) {
        e.preventDefault(); // Para no abandonar la página al enviar formulario.

        const marca = $("#marca").val() as string;
        const modelo = $("#modelo").val() as string;
        const datos: Objeto = { marca, modelo };

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
        async function sendAsync() {
            try {
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(datos),
                });

                const data = await response.json();
                $("#datos").html(`<h1>El coche es un ${data.marca} ${data.modelo}</h1>`);
            } catch (error) {
                console.error("Error con Async/Await:", error);
            }
        }
        sendAsync();
        //----------------------------------------------------------------------------------
    }

    $('form').on('submit', funAjax);
});
