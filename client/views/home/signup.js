Template.signup.events({
	"click #register": function(e, template) {
		var _email = $("#email").val();
		var _pwd = $("#password").val();
		console.log("going to sign in ", _email, _pwd);

		Accounts.createUser({ email: _email, password: _pwd }, function(err) {
			if (err) {
				console.log("error when creating the user");
			} else {
				console.log("success!", Meteor.userId());
			}
		});
	}
})