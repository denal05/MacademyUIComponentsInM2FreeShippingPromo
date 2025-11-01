define([
	'uiComponent',
	'ko'
], function(
	Component,
	ko
) {
	'use strict';

	return Component.extend({
		defaults: {
    message: 'Free Shipping Message - defaults property - Knockout template',
    subtotal: ko.observable(33.00),
    template: 'Denal05_MacademyUIComponentsInM2FreeShippingPromo/free-shipping-banner'
		},
		initialize: function() {
			this._super();
			var self = this;
			console.log(this.message);
		
		 window.setTimeout( function () {
				self.subtotal(36.00);
			}, 2000);
		},
		formatCurrency: function(value) {
    return '$' + value().toFixed(2);
		} b
	});
});
