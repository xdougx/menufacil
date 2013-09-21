var FilialController = (function () {
	var Filial = function () {
		this.index = function (sammy) {
			$.get("/filial/index").then(function (data) {
				$("#body").html(data);
			});

		};
	};
	return Filial;
})();