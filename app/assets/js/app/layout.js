define(['marionette', "text!templates/mainlayout.html"], function (Marionette, templateBody) {
	return Marionette.LayoutView.extend({
		
		template: _.template(templateBody),

		regions: {
			header:  "#header",
			page: 	 "#page",
			footer:  "#footer"
		}
	});
});