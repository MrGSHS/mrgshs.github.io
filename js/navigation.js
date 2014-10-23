var Navigation = {
    Init: function() {
		Navigation.ImportElement = document.createElement("link");
		Navigation.ImportElement.rel = "import";
		Navigation.ImportElement.href = "include/navigation.html";
		Navigation.ImportElement.onload = function(e) {
			// cb
			console.log("navigation loaded!");
			console.dir(e);
		};
		Navigation.ImportElement.onerror = function(e) {
			// something went wrong
			console.dir(e);
		};
		document.head.appendChild(Navigation.ImportElement);
    },
};

$(document).ready(function() {
	Navigation.Init();
});