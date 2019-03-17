/*let rect = {
	area: (x, y) => x*y, 
	perimeter: (x, y) => 2*(x+y)
}; */
let rect = require('./rectangle');

solveRect = (l, b) => {
	if(l <= 0 || b <= 0) {
		console.log("Dimensions of rectangle should be positive");
	}
	else {
		console.log("Area of rectangle is : " + rect.area(l, b));
		console.log("Perimeter of rectangle is : " + rect.perimeter(l, b));
	}
} 

solveRect(2, 5);
solveRect(3, 4);
solveRect(0, 5);
solveRect(2, -5);