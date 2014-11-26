define(['marionette', "text!templates/gameOver.html"], function (Marionette, templateBody) {
	return Marionette.ItemView.extend({
		template: _.template(templateBody)
	});
});