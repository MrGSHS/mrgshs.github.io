var Navigation = {
    Init: function() {
    	if ("import" in document.createElement("link")) {
    		Navigation.ImportElement = document.createElement("link");
    		Navigation.ImportElement.rel = "import";
    		Navigation.ImportElement.href = "include/navigation.html";
    		Navigation.ImportElement.onload = function(e) {
    			// cb
    		};
    		Navigation.ImportElement.onerror = function(e) {
    			// something went wrong
    			console.dir(e);
    		};
    		document.head.appendChild(Navigation.ImportElement);
    	} else {
    		// not supported
    		console.log("Your browser is not supported (a.k.a. stop using IE 6)");
    	}
    },
};

$(document).ready(function() {
	Navigation.Init();
});