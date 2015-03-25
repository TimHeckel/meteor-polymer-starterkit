Template.dashboardLayout.helpers({
	transition: function() { 
		return function(from, to, element) {
	  		return 'right-to-left';
	  	}
  	}
  	, theme: function() {
  		return Themes.find();
  	}
});

Template.dashboardLayout.events({
	"click [data-action=toggle-drawer]": function(e) {
		$("[data-drawer-panel]")[0].togglePanel();
	}
});

Template.dashboardLayout.onRendered(function() {
	var ddl = document.querySelector("#ddlTheme");
	//firing twice is normal for now
	//http://stackoverflow.com/questions/24474020/how-does-core-selectors-core-select-event-work
	ddl.addEventListener('core-select', function(e) {
		console.log("cahnged theme...", arguments);
		if (e.detail.isSelected) {
			$("head").find("#currentTheme")[0].href = "themes/" + $(e.detail.item).attr("data-src");
		}
	});
});