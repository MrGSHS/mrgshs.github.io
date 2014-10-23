var Navigation = {
	Check: function(callback) {
		if (!("import" in document.createElement("link"))) {
			console.log("Import is not supported in this browser! Time to upgrade your browser.");
		} else {
			console.log("Import is supported in this browser! Congratulations!");
		}
		callback();
	},
	Load: function() {
		var content = document.querySelector("link[rel='import']").import;
		var el = content.querySelector("div#navigation-import");
		document.body.appendChild(el.cloneNode(true));
	},
};

$(document).ready(function() {
	Navigation.Check(function() {
		Navigation.Load();
	});
});