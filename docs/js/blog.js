var pretraga = document.getElementById("pretraga");
var prikazi = document.getElementById("prikazi-sve");
var listaZaPretragu = document.querySelectorAll(".pretraga");
var hamburger = document.getElementById("hamburger");
var zavesa = document.getElementById("zavesa");

if (pretraga) {
	pretraga.addEventListener("keyup", function () {
		var pojam = pretraga.value.toUpperCase();
		var itemValue;
		listaZaPretragu.forEach(element => {
			itemValue = element.getAttribute("data-naziv").toUpperCase();
			if (itemValue.indexOf(pojam) > -1) {
				element.style.display = "block";
			} else {
				element.style.display = "none";
			}
		});
	});
	prikazi.addEventListener("click", function () {
		pretraga.value = "";
		listaZaPretragu.forEach(element => {
			element.style.display = "block";
		});
	});
}

hamburger.addEventListener("click", function () {
	this.classList.toggle("close");
	document.getElementById("meni").classList.toggle("meni-vidljiv");
	zavesa.classList.toggle("zavesa");
});

zavesa.addEventListener("click", function () {
	hamburger.classList.toggle("close");
	document.getElementById("meni").classList.toggle("meni-vidljiv");
	zavesa.classList.toggle("zavesa");
});
