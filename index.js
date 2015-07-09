var contextMenu = require('sdk/context-menu');
var tabs = require('sdk/tabs');

var dictUrl = 'http://dict.youdao.com/search?q=';

var menuItem = contextMenu.Item({
label: "Translate selection",
context: contextMenu.SelectionContext(),
contentScript: 'self.on("click", function() {' +
	' var text = window.getSelection().toString();' +
	' self.postMessage(text);' +
	'})',
onMessage: function(selectionText) {
tabs.open(dictUrl + selectionText);
}
});
