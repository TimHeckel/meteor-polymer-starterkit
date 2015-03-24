Router.configure({
    autoRender: false
    , autoStart: false
});

//dashboard controller
DashboardController = RouteController.extend({
    layoutTemplate: "dashboardLayout"
    , loadingTemplate: "loading"
    , onBeforeAction: function() {
        if (Meteor.loggingIn())
            this.render("loading");
        else if (Meteor.user())
            this.next();
        else
            this.redirect("/login");
    }
});

Router.route("/dashboard", {
    name: "dashboard"
    , template: "dashboard"
    , controller: "DashboardController"
});

Router.route("/account", {
    name: "account"
    , template: "account"
    , controller: "DashboardController"
});

Router.route("/widgets", {
    name: "widgets"
    , template: "widgets"
    , controller: "DashboardController"
});

//public controller
PublicController = RouteController.extend({
    layoutTemplate: "publicLayout"
    , loadingTemplate: "loading"
    , onBeforeAction: function() {
        if (Meteor.loggingIn())
            this.render("loading");
        else if (!Meteor.user())
            this.next();
        else
            this.redirect("/dashboard");
    }
});

Router.route("/login", {
    name: "login"
    , template: "login"
    , controller: "PublicController"
});

Router.route("/logout", {
    name: "logout"
    , action: function() {
        Meteor.logout();
        this.redirect("/login");
    }
});

Router.route("/signup", {
    name: "signup"
    , template: "signup"
    , controller: "PublicController"
});

//home
Router.route("/", {
    name: "home"
    , action: function() {
        if (Meteor.user()) {
            this.layout("dashboardLayout");
            this.render("dashboard");
        } else {
            this.layout("publicLayout");
            this.render("login");
        }
    }
});

