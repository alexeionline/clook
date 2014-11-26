define(['marionette', "text!templates/mainMenu.html"], function (Marionette, templateBody) {
	return Marionette.ItemView.extend({
		template: _.template(templateBody)
	});
});