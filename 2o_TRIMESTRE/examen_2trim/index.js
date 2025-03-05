var Articulos = /** @class */ (function () {
    function Articulos() {
        var _this = this;
        this.getArticulos();
        $("#f1").on("submit", function (event) {
            event.preventDefault();
            _this.pushArticulo();
        });
    }
    Articulos.prototype.getArticulos = function () {
        var _this = this;
        $.getJSON("/getArticulos", function (data) {
            _this.renderArticulos(data);
        });
    };
    Articulos.prototype.pushArticulo = function () {
        var _this = this;
        var cod = $("#cod").val();
        var color = $("#color").val();
        var piel = $("#piel").val();
        $.getJSON("/pushArticulos", { cod: cod, color: color, piel: piel }, function (data) {
            _this.renderArticulos(data);
        });
        $("#f1")[0].reset();
    };
    Articulos.prototype.renderArticulos = function (data) {
        var filas = "";
        data.forEach(function (articulo) {
            filas += "<tr>\n                        <td>".concat(articulo.id, "</td>\n                        <td>").concat(articulo.cod, "</td>\n                        <td>").concat(articulo.color, "</td>\n                        <td>").concat(articulo.piel, "</td>\n                      </tr>");
        });
        $("#carteras").html(filas);
    };
    return Articulos;
}());
$(document).ready(function () {
    new Articulos();
});
