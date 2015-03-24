Meteor.startup(function() {
	Inject.rawModHtml("addUnresolved", function(html) {
		html = html.replace('<body>', '<body unresolved fit fullbleed iron-router>');
		return html;
	});
	if (ReactiveText.find({ _id: "reactive" }).count() === 0) {
		ReactiveText.insert({ _id: "reactive", text: "" });
	}
});