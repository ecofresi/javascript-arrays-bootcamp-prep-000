/*
TODO: In arrays.js, define a variable called chocolateBars. Its value should be an array of the strings snickers, hundred grand, kitkat, and skittles.
*/

var chocolateBars = new Array('snickers', 'hundred grand', 'kitkat', 'skittles');

//TODO2

cities = ["foo", "San Francisco"];

function addElementToBeginningOfArray(array,element)
{
return [element,...array];
}

addElementToBeginningOfArray(cities,"Miami");

function destructivelyAddElementToBeginningOfArray(array,element){
  
}

destructivelyAddElementToBeginningOfArray(cities, 'Milan');