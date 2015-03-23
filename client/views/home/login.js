Template.login.events({
	"click #login": function(e, template) {

		var _email = $("#email").val();
		var _pwd = $("#password").val();

		var _valid = $("#email")[0].validity.valid;
		$("#emailValidator")[0].isInvalid = !_valid;

		if (_valid) {
			Meteor.loginWithPassword(_email, _pwd, function(err) {
				if (err) {
					GlobalUI.toast("Sorry, there was a problem: " + err.reason);
				}
			});
		}
	}
})