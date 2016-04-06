Template.registerHelper("money", function(amount){
	return accounting.formatMoney(amount/100);
});

Template.registerHelper("markdown", function(text){
	var converter = new showdown.Converter();
	return converter.makeHtml(text);
});