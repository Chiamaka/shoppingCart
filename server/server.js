Meteor.startup(function(){
	if(Products.find().count() === 0){
		Products.insert({thumb: 'game.jpg', name: "PS3 Game Pad", desc: "Wireless gamepad for playStation", price: 5000, catName: 'Laptops'});
		Products.insert({thumb: 'moto-x.jpg', name: "motorola x 2g", desc: "Best and cheapest phone on the market", price: 53000, catName: 'SmartPhones'});
		Products.insert({thumb: 'joy-movie.jpg', name: "Joy", desc: "Grains movie and food", price: 100, catName: 'Grains'});
		Products.insert({thumb: 'rubiks-cube.png', name: "Rubiks cube", desc: "Vegetables and fiber for your brain", price: 1500, catName: 'Vegetables'});
	}
	if(Categories.find().count() === 0){
		var foodid = Categories.insert({name: "FOOD"});
		var electid = Categories.insert({name: "ELECTRONICS"});

		SubCategories.insert({name: "Cereal", cat: foodid});
		SubCategories.insert({name: "Vegetables", cat: foodid});
		SubCategories.insert({name: "Grains", cat: foodid});
		SubCategories.insert({name: "Fries", cat: foodid});

		SubCategories.insert({name: "Laptops", cat: electid});
		SubCategories.insert({name: "HeadPhones", cat: electid});
		SubCategories.insert({name: "SmartPhones", cat: electid});
	}
});

Meteor.methods({
	addToCart: function(q, p, s){
		if(q > 0){
			CartItems.insert({qty: q, product: p, sessId: s});
		}else{
			console.log("Quantity is Zero");
		}
	},

	removeFromCart: function(cartItemId){
		CartItems.remove({_id: cartItemId});
	}
});