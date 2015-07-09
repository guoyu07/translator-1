var root = document.documentElement;
var results = document.getElementById("results-contents").cloneNode(true);

while (root.firstChild) {
	root.removeChild(root.firstChild);
}

var body = document.createElement('body');
body.appendChild(results);
root.appendChild(body);

self.port.emit("done");
