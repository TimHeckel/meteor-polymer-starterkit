Template.login.events({
	"click #login": function(e, template) {
		var _email = $("#email").val();
		var _pwd = $("#password").val();
		console.log("going to log in ", _email, _pwd);
	}
})