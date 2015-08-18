/**
* Generic Helpers Module
* @module helpers
*/
let getTransformValue = function(style) {
	return style['-webkit-transform']
	|| 	style['webkit-transform'] 
	|| 	style['transform']
	|| 	style.webkitTransform
	||	style['-moz-transform']
	|| 	style['moz-transform'] 
	|| 	style.MozTransform
	|| 	style.mozTransform;
}


let setTransformValue = function(style, value) {
 	style.webkitTransform = value;
    style.MozTransform = value;
    style.msTransform = value;
    style.OTransform = value;
    style.transform = value;
}

module.exports = {
	/**
	* Retrieves a browser specific transform property
	* @memberOf module:helpers#
	* @param {array} style
	*/
	getTransformValue: getTransformValue,
	/**
	* Sets a browser specific transform property
	* @memberOf module:helpers#
	* @param {array} style
	* @param {string} value
	*/
	setTransformValue: setTransformValue
}