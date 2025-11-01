define([
	'uiComponent',
	'ko',
	'Magento_Customer/js/customer-data',
	'underscore'
], function(
	Component,
	ko,
	customerData,
	_
) {
	'use strict';

	return Component.extend({
		defaults: {
				message: '${ $.messageDefault }',
				subtotal: 0.00,
				template: 'Denal05_MacademyUIComponentsInM2FreeShippingPromo/free-shipping-banner',
				tracks: {
					message: true,
					subtotal: true
				}
		},
		initialize: function() {
			this._super();
			var self = this;
			var cart = customerData.get('cart');
			customerData.getInitCustomerData().done(function() {
				if(!_.isEmpty(cart()) &&
					!_.isUndefined(cart().subtotalAmount)
				) {
					self.subtotal = parseFloat(cart().subtotalAmount);
				}
			});
			
			cart.subscribe( function(cart) {
				if(!_.isEmpty(cart) &&
					!_.isUndefined(cart.subtotalAmount)
				) {
					self.subtotal = parseFloat(cart.subtotalAmount);
				}
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
