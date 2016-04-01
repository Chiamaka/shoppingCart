Template.products.helpers({
	catNotSelected: function(){
		return Session.equals('category', null);
	},
	category: function(){
		return Session.get('category');
	},
	productList: function(){
		return Products.find({catName: Session.get('category')})
	}
});

Template.product.helpers({
	currency: function(price){
		return "=N=" + Number(price).toFixed(2);
	}
});

Template.product.events({
	'click .addcart': function(event, template){
		var qty = template.find('.prodqty').value;
		var product = this._id;
		var sessId = Meteor.default_connection._lastSessionId;

		Meteor.call('addToCart', qty, product, sessId);
	}
});