Router.configure({
	layoutTemplate : 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.route("/", {
	name : "homeIndex",
	data : function () {
		return {
			message : "PIll oh PoP"
		}
	}
});
Router.route("/about", {
	name : "homeAbout"
});
Router.route("/settings", {
	name : "homeSettings"
});
Router.route("/products/:sku", {
	name : "productShow",
	data : function(){
		return Products.findOne({skue : this.params.sku});
	}
});
