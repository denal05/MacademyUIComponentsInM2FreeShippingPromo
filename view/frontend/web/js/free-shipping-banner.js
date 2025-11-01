define([
	'uiComponent'
], function(
	Component
) {
	'use strict';

	return Component.extend({
		defaults: {
			message: 'Free Shipping Message - defaults property - Knockout template',
            subtotal: 33.00, N
			template: 'Denal05_MacademyUIComponentsInM2FreeShippingPromo/free-shipping-banner'
		},
		initialize: function() {
			this._super();
			console.log(this.message);
		},
        formatCurrency: function(value) {
            return '$' + value.toFixed(2);
        }
	});
});
