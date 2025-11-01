define([
	'uiComponent',
	'ko',
	'Magento_Customer/js/customer-data'
], function(
	Component,
	ko,
	customerData
) {
	'use strict';

	return Component.extend({
		defaults: {
				message: 'Free Shipping Message Placeholder - UI Component defaults property - Knockout template',
				subtotal: 0.00,
				template: 'Denal05_MacademyUIComponentsInM2FreeShippingPromo/free-shipping-banner',
				tracks: {
					subtotal: true
				}
		},
		initialize: function() {
			this._super();
			var self = this;
			var cart = customerData.get('cart');
			customerData.getInitCustomerData().done(function() {
				self.subtotal = parseFloat(cart().subtotalAmount);
			});
			
			// simulate the user updating the value
			/*
			window.setTimeout( function () {
				self.subtotal(36.00);
			}, 2000);
			*/
		},
		formatCurrency: function(value) {
			return '$' + value().toFixed(2);
		}
	});
});
