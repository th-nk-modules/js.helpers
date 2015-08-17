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

module.exports = {
	/**
	* Retrieves a browser specific transform property
	* @memberOf module:helpers#
	* @param {array} style
	*/
	getTransformValue: getTransformValue
}