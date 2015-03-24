Template.dashboardLayout.helpers({
	transition: function() { 
		return function(from, to, element) {
	  		return 'right-to-left';
	  	}
  	}
});

Template.dashboardLayout.events({
	"click [data-action=toggle-drawer]": function(e) {
		$("[data-drawer-panel]")[0].togglePanel();
	}
});