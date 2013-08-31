var IndexSiteModule = (function () {
    var IndexModule = function () {
        this.abrir_alerta = function () {
            $("#alerta").click(function (e) {
                e.preventDefault();
                alert("Estou te alertando");
            });
        };
    };

    return IndexModule;
})();