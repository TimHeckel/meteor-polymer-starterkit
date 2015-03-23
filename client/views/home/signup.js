Template.signup.events({
	"click #register": function(e, template) {
		var _email = $("#email").val();
		var _pwd = $("#password").val();
		
		var _valid = $("#email")[0].validity.valid;
		$("#emailValidator")[0].isInvalid = !_valid;

		if (_valid) {
			Accounts.createUser({ email: _email, password: _pwd }, function(err) {
				if (err) {
					GlobalUI.toast("Sorry, there was a problem: " + err.reason);
				}
			});
		}
	}
})