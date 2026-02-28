# MacademyUIComponentsInM2FreeShippingPromo
A Magento 2 module built as an exercise for the M.academy "UI Components in Magento 2" course by Mark Shust.  
UI Components are the JavaScript-side ViewModel in Magento.  
  
## User Story
As a visitor, I’d like to know how many dollars to add to my cart so I know when my shopping cart total qualifies for the free shipping promotion.

Requirements and Details
A new banner should be shown at the top of the website that lets the visitor know about the free shipping promotion. The content for this banner should change depending on one of three states:

1. No items in the cart: Show a notice that says “Free shipping on orders over $100” with an emoji.
1. Items in the cart with a subtotal between $0.01 and $99.99: Show a message that says “You are X dollars away from free shipping” with a sunglass emoji.
1. Items in the cart with a subtotal of $100 or more: Show a message that says “Your order now has free shipping.”

The goal is to let the visitor know about the free shipping promotion, how much more they need to spend to qualify, or if they already qualify for free shipping.

A visual mockup should be provided to show how the free shipping text should display on the site. Mockups are useful because they help visualize the end result and make it clear what needs to be done.

## Assumptions
1. The text display does not need to be editable or configurable from the admin. This avoids creating unnecessary admin configuration screens.
1. The free shipping threshold value of $100 is fixed and will not change. No admin system configuration is needed; the value can be hardcoded.
1. The text displayed should dynamically change when the cart subtotal changes, without needing the page to be refreshed.

## UI Component
Since the text needs to dynamically react to the cart subtotal changes, the module should be built as a UI Component.

## Time Estimates
- For experienced developers, this task can be estimated as a medium ticket, taking between 3 and 5 hours to complete. This includes researching how to get the cart subtotal and handling any intricacies involved with the display of the text.
- For beginning or intermediate developers, this task can be estimated as a large item, taking more time for research and learning the necessary steps.

## Style a block template - Updating the source file  
Anytime you make changes within your less file, you need to rerun the `bin/magento setup:upgrade` command.  

## uiClass vs uiElement vs uiCollection vs uiComponent  
All of these files reside in the following folder:  
```
vendor/magento/module-ui/view/base/web/js/lib/core
```
… However, uiElements cannot have child components, which limits their functionality compared to uiCollection.  

## Binding data from UI Components to KnockoutJS
… UI components are often referred to as ViewModels.  

## Create a KnockoutJS template
… phtml should really just be used for component initialization.  
Create a directory named `view/frontend/web/template`. Note that the naming of this is 'template', and not 'templates' like our phtml files, the JavaScript rendering uses this different name, so it’s just something to be aware of.

## Understand Knockout observables, tracks & reactivity
If we make the subtotal observable, as in `subtotal: ko.observable( initialValue: 33.00 )` ...  
Whenever we make a property observable, that property becomes a function. We can no longer assign values with an equal sign, such as `self.subtotal = 35.00;` we assign values with a call to a function, so we will wrap this value within a function call, i.e., within parentheses, as in `self.subtotal(35.00);`  
We also have to do the same within our formatCurrency function; we have to update `value.toFixed(2)` to a function call, as in `value().toFixed(2);` If we call the function without parameters, as in `value.toFixed(2)`, it returns the original value.  

## Issues  
- No known issues.

