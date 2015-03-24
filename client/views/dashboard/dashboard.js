
Template.dashboard.onCreated(function() {
	Session.set("__selectedTabIndex", 0);
});

Template.dashboard.onRendered(function() {
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
	var _ca = document.querySelector("#collabAutogrow");

	_txt.addEventListener("keyup", function(e) {
		ReactiveText.update({ _id: "reactive" }, { $set: { text: e.target.value } });
	});

	this.autorun(function() {
		ReactiveText.find({ _id: "reactive" }).observe({
			added: function(doc) {
				_txt.value = doc.text;
				_ca.update(_txt);
			}
			, changed: function(doc) {
				_txt.value = doc.text;
				_ca.update(_txt);
			}
		});
	});
});

Template.dashboard.helpers({
	selected: function() {
		return Session.get("__selectedTabIndex");
	}
	, val: function() {
		return ReactiveText.find()
	}
});