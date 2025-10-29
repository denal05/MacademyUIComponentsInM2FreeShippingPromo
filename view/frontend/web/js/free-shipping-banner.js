define([
	'uiComponent'
], function(
	Component
) {
	'use strict';

	return Component.extend({
		initialize: function() {
			this._super();
			console.log('Free Shipping Banner UI component has been loaded via Component.extend({ initialize... })');
		}
	});
});
