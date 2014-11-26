define(['marionette', "text!templates/splashPage.html"], function (Marionette, templateBody) {
	return Marionette.ItemView.extend({
		template: _.template(templateBody),

		initialize: function () {
			setTimeout(function () {
				Backbone.history.navigate("mainMenu", { trigger: true });
			}, 500);
		}
	});
});