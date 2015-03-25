Meteor.startup(function() {
	Inject.rawModHtml("addUnresolved", function(html) {
		html = html.replace('<body>', '<body unresolved fit fullbleed iron-router>');
		return html;
	});
	if (ReactiveText.find({ _id: "reactive" }).count() === 0) {
		ReactiveText.insert({ _id: "reactive", text: "" });
	}
	
	if (Themes.find().count() === 0) {

		var _themes = [
			{ src: "candy.css", name: "Candy" }
			, { src: "classical.css", name: "Classical" }
			, { src: "darkside.css", name: "Darkside" }
			, { src: "denim.css", name: "Denim" }
			, { src: "goldengoose.css", name: "Golden Goose" }
			, { src: "ice.css", name: "Ice Ice Baby" }
			, { src: "melon.css", name: "Melon" }
		];
		
		_.each(_themes, function(t) {
			Themes.insert(t);
		});

	}
});