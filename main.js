$(document).ready(function() {
	//Thing that it should do
	'use strict';

paper.install(window);
paper.setup(document.getElementById('mainCanvas'));

// TODO

paper.view.draw();

var c;

	for (var x=25; x<400; x+=50) {
		for (var y=25; y<400; y+=50) {
		c = Shape.Circle(x, y, 25);
		c.fillColor = 'black';
	};
};


var d;

	for (var x=25; x<400; x+=50) {
		for (var y=25; y<400; y+=50) {
		d = Shape.Circle(x, y, 20);
		d.fillColor = 'white';
	};
};


var e;

	for (var x=25; x<400; x+=50) {
		for (var y=25; y<400; y+=50) {
		e = Shape.Circle(x, y, 15);
		e.fillColor = 'black';
	};
};


var f;

	for (var x=25; x<400; x+=50) {
		for (var y=25; y<400; y+=50) {
		f = Shape.Circle(x, y, 10);
		f.fillColor = 'white';
	};
};

	var tool = new Tool();
	tool.onMouseDown = function(event) {
		var c = Shape.Circle(event.point.x, event.point.y, 20);
		c.fillColor = 'aquamarine';
	};



	console.log ('jquery and main.js loaded');
});