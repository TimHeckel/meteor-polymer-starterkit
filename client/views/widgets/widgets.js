Template.widgets.helpers({
	widget: function() {
		return Widgets.find({}, { sort: { name: -1 } });
	}
});

Template.widgets.events({
	"click .delWidget": function(e) { 
		var id = $(e.target).attr("data-id");
		Widgets.remove({ _id: id });
	}
	, "click #btnAddWidget": function(e) {

		var _name = $("#txtName").val();
		var _description = $("#txtDescription").val();

		console.log("clicked widget", _name, _description);

		var nv = $("#txtName")[0].validity.valid;
		$("#nameDescriptor")[0].isInvalid = !nv;

		var dv = $("#txtDescription")[0].validity.valid;
		$("#descriptDecorator")[0].isInvalid = !dv;

		if (nv && dv) {
			Widgets.insert({ name: _name, description: _description });
		}
	}

});