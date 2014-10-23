var Navigation = {
    Init: function() {
    	if ("import" in document.createElement("link")) {

    	} else {
    		// not supported
    		console.log("Your browser is not supported (a.k.a. stop using IE 6)");
    	}
    },
};

$(document).ready(function() {
	Navigation.Init();
});