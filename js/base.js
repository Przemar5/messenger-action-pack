/**
 *	This file contains basic util functions used to build more complex functions
 *	Many of these functions are very simple and can be replaced by 
 *	built in functions or one line of code, but they must have special form
 *	in order of function composition.
 */

function compare(a, b)
{
	return a == b;
}


function strictCompare(a, b)
{
	return a === b;
}


function and(a, b)
{
	return a && b;
}


function or(a, b)
{
	return a || b;
}


function xor(a, b)
{
	return (a && !b) || (!a && b);
}


function sum(a, b)
{
	return a + b;
}


function transform(a, f)
{
	return f(a);
}


function compose(arr)
{
	if (arr.length < 2)
		return arr[0];
	
	val = arr.shift();
	
	return compose(replace(arr, arr[0](val), 0));
}


function first(arr)
{
	return arr[0];
}


function last(arr)
{
	return arr[arr.length - 1];
}


function butFirst(arr)
{
	return arr.slice(0, arr.length - 1);
}


function butLast(arr)
{
	return arr.slice(1);
}


function at(arr, index)
{
	return arr[index];
}


function insert(arr, el, index)
{
	return arr.slice(0, index).concat([el]).concat(arr.slice(index));
}


function replace(arr, el, index)
{
	return arr.slice(0, index).concat([el]).concat(arr.slice(index + 1));
}


function remove(arr, index)
{
	return arr.slice(0, index).concat(arr.slice(index + 1));
}


function shift(arr)
{
	return arr.shift();
}


function unshift(arr, el)
{
	return [el].concat(arr);
}


function push(arr, el)
{
	return arr.concat([el]);
}


function merge(arr1, arr2)
{
	return arr1.concat(arr2);
}


function rotateLeft(arr)
{
	val = arr.shift();
	
	return push(arr, val);
}


function rotateRight(arr)
{
	val = arr.pop();
	
	return [val].concat(arr);
}


function reduceLeft(arr, f, accum = null)
{
	if (arr.length == 0)
		return accum;
	
	return reduceLeft(arr.slice(1), f, f(accum, arr[0]));
}


function reduceRight(arr, f, accum = null)
{
	if (arr.length == 0)
		return accum;
	
	return reduceRight(arr.slice(1), f, f(arr[0], accum));
}


function concat(a, b)
{
	return a.concat(b);
}


function find(str, regex)
{
	return regex.exec(str) || null;
}


function index(str, regex)
{
	return regex.exec(str).index;
}


function all(str, regex, accum = [])
{
//	if (!regex instanceof RegExp)
//		regex = new RegExp(regex);
	
	found = (new RegExp(regex)).exec(str);
	
	if (found == null || found == undefined)
		return accum;
	
	return all(str.substring(found['index'] + 1), regex, accum.concat([found[0]]));
}

// Bug here
function allIndexes(str, regex, accum = [])
{
	found = (new RegExp(regex)).exec(str);
	
	if (found == null || found == undefined)
		return accum;
	
	return allIndexes(str.substring(found['index'] + 1), regex, accum.concat([found['index']]));
}


function count(str, regex)
{
	return (str.match(new RegExp(regex, 'gm')) || []).length;
}