
Template.dashboard.created = function() {
	Session.set("__selectedTabIndex", 0);
}

Template.dashboard.rendered = function() {
	var tabs = document.querySelector("#dashboardTabs");
	//firing twice is normal for now
	//http://stackoverflow.com/questions/24474020/how-does-core-selectors-core-select-event-work
	tabs.addEventListener('core-select', function(e) {
		console.log("selected...", arguments);
		if (e.detail.isSelected) {
			Session.set("__selectedTabIndex", tabs.selected);
		}
	});

	var _txt = document.querySelector("#txtReactive");

	_txt.addEventListener("keyup", function(e) {
		console.log("typing ", e.target.value);
		ReactiveText.update({ _id: "reactive" }, { $set: { text: e.target.value } });
	});

	this.autorun(function() {
		ReactiveText.find({ _id: "reactive" }).observe({
			added: function(doc) {
				_txt.value = doc.text;
			}
			, changed: function(doc) {
				_txt.value = doc.text;
			}
		});
	});

};

Template.dashboard.events({
	"click core-animated-pages": function(e) {
		var up = true;
		var max = 4;
		var p = document.querySelector('core-animated-pages');
		if (up && p.selected === max || !up && p.selected === 0) {
			up = !up;
		}
		if (up) {
			p.selected += 1;
		} else {
			p.selected -= 1;
		}
	}
});

Template.dashboard.helpers({
	selected: function() {
		return Session.get("__selectedTabIndex");
	}
	, val: function() {
		return ReactiveText.find()
	}
});