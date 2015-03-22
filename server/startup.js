Meteor.startup(function() {
	Inject.rawModHtml("addUnresolved", function(html) {
		html = html.replace('<body>', '<body unresolved fit fullbleed iron-router>');
		return html;
	});
});