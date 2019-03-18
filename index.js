/*let rect = {
	area: (x, y) => x*y, 
	perimeter: (x, y) => 2*(x+y)
}; */
let rect = require('./rectangle');

solveRect = (l, b) => {
	console.log("Solving for l = " + l + " and b = " + b);
	console.log(`This statement is after the call to rect() but won't wait for the rect 
		function to be executed and it will carry on doing something else`);
	rect(l, b, (err, rectangle) => {
		if(err) {
			console.log("ERROR: ", err.message);
		}
		else {
			console.log("For dimensions " + l + " and " + b
				+ " Area of rectangle is " + rectangle.area(l, b) 
				+ " Perimeter of rectangle is " + rectangle.perimeter(l, b));
		}
	});
}

solveRect(2, 5);
solveRect(3, 4);
solveRect(0, 5);
solveRect(2, -5);