var polymerReady  = new ReactiveVar(false);

$(window).on("polymer-ready", function() {
    return polymerReady.set(true);
});

Meteor.startup(function() {
    Tracker.autorun(function() {
        if (polymerReady.get()) {
            Router.insert({
                el: "[iron-router]"
            });
            Router.start();
        }
    });
});