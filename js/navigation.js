var Navigation = {
	Check: function(callback) {
		if (!("import" in document.createElement("link"))) {
			console.log("Import is not supported in this browser! Time to upgrade your browser.");
			callback(false);
		} else {
			console.log("Import is supported in this browser! Congratulations!");
			callback(true);
		}
	},
	Load: function(supported) {
		if (supported) {
			var content = document.querySelector("link[rel='import']").import;
			var el = content.querySelector("div#navigation-import");
			document.body.appendChild(el.cloneNode(true));
		} else {
			var url = document.getElementById("navigation-import").getAttribute("href");
			$.ajax({
				url: url,
				dataType: "html",
				type: "get",
				success: function(content) {
					var el = document.createElement("div");
					el.innerHTML = content;

					document.body.appendChild(el.cloneNode(true));
				}
			});
		}
	},
};

$(document).ready(function() {
	Navigation.Check(function(supported) {
		Navigation.Load(supported);
	});
});