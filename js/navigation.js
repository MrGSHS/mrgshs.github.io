var Navigation = {
    Init: function() {
		Navigation.ImportElement = document.querySelector("link#navigation-import[rel=import]");
		Navigation.Content = Navigation.ImportElement.import;
		console.dir(Navigation.Content);
    },
};

$(document).ready(function() {
	Navigation.Init();
});