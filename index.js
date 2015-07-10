var contextMenu = require('sdk/context-menu');
var tabs = require('sdk/tabs');
var panel = require('sdk/panel');

var dictUrl = 'http://dict.youdao.com/search?q=';

var menuItem = contextMenu.Item({
	label: "Translate selection",
	context: contextMenu.SelectionContext(),
	contentScript: 'self.on("click", function() {' +
		' var text = window.getSelection().toString();' +
		' self.postMessage(text);' +
		'})',
	onMessage: function(selectionText) {
		var resultPanel = panel.Panel({
			width: 360,
			height: 360,
			contentURL: dictUrl + selectionText,
			contentScriptFile: "./get-result.js"
		});
		resultPanel.port.on("done", function() {
			resultPanel.show();
		});
	}
});
