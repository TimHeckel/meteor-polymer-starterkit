# meteor-polymer-starterkit
Barebones starter kit for Meteor + Polymer integration

This is a [Meteor](http://meteor.com) <-> [Polymer](https://www.polymer-project.org) integration with minimal custom CSS. This package still relies on the [`differential:vulcanize`](https://atmospherejs.com/differential/vulcanize) build plugin to find `imports.html` from the `/public` directory to pull in polymer elements along with [`iron:router`](https://atmospherejs.com/iron/router) and [`pecolate:momentum-iron-router`](https://atmospherejs.com/percolate/momentum-iron-router), but otherwise I wanted to keep the styling as barebones as possible to expose polymer's native functionality.

![Meteor Polymer Starterkit](http://content.screencast.com/users/timslate/folders/Snagit/media/2e306d58-e1d9-484a-832c-ef0ca7765dca/2015-03-25_08-48-37.png)

You can copy and paste themes from [polymer-themes](https://polymerthemes.com/) directly into the `/public/themes` directory, then run `Widgets.insert({ src: 'savedTheme.css', name: 'Name of theme' })` and you'll see the new theme in the dropdown when the apps starts.
