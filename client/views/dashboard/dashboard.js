Template.dashboard.events({
	"click core-animated-pages": function(e) {
		var up = true;
		var max = 4;
		var p = document.querySelector('core-animated-pages');
		if (up && p.selected === max || !up && p.selected === 0) {
			up = !up;
		}
		if (up) {
			p.selected += 1;
		} else {
			p.selected -= 1;
		}
	}
});