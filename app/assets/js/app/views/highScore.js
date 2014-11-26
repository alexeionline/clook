define(['marionette', "text!templates/highScore.html"], function (Marionette, templateBody) {
	return Marionette.ItemView.extend({
		template: _.template(templateBody)
	});
});