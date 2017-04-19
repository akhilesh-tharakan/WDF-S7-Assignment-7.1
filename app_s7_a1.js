/* This is the script file from where we are passing the value */	
/* Session 7 Assignment 1 */

var area;
var r = parseInt(prompt("Enter the value for radius: "));
/*Function is defined here, Where the r value which user entered is being taken here*/
function areaofcircle(r)
{
	return 3.14*(r*r);
}
window.alert("The area of the circle with radius " + r + " is : " + areaofcircle(r));
/* The Final calculated value is printed here*/

