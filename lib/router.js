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
  name : "productsShow",
  waitOn : function(){
    return Meteor.subscribe("products-by-sku", this.params.sku);
  },
  data : function(){
    return Products.findOne({sku : this.params.sku});
  }
});
