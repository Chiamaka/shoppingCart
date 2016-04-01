
Router.configure({
	layoutTemplate: 'layout',
	yieldTemplates: {
		//nameOfTemplate: {to: nameOfYield}
		'products': {to: 'products'},
		'cart': {to: 'cart'},
		'categories': {to: 'categories'}
	} 
});

Router.map(function(){
	this.route('/', 'layout');
	//name of the template 'products'
	this.route('/products', {
		data: function(){
			Session.set('category', this.params.name);
		},
		template: 'layout',
		path: '/:name'
	});
});

// Router.route('/', function(){
// 	this.render('products', {to: 'products'});
// 	this.render('cart', {to: 'cart'});
// 	this.render('categories', {to: 'categories'});
// });
