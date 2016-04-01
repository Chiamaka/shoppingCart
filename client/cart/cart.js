Template.cart.helpers({
	currency: function(price){
		return '=N=' + Number(price).toFixed(2);
	},
	cartItems: function(){
		var shopCart = [];
		var cartItems = CartItems.find();
		var total = 0;
		cartItems.forEach(function(item){
			var product = Products.findOne({_id:item.product});
			item.productName = product.name;
			item.price = (Number(product.price) * item.qty);
			total += item.price;
			shopCart.push(item);
		});

		shopCart.subTotal = total;
		shopCart.tax = shopCart.subTotal * 0.03;
		shopCart.total = shopCart.subTotal + shopCart.tax;

		return shopCart;
	}
});

Template.cart.events({
	'click .removeCartItem': function(){
		console.log('deleting');
		Meteor.call('removeFromCart', this._id);
	}
});