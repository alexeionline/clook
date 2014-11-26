define(['marionette', "text!templates/scoreHeader.html"], function (Marionette, templateBody) {
	return Marionette.ItemView.extend({
		template: _.template(templateBody),

		initialize: function () {
			this.listenToOnce(this.model, 'change:score', this.render);
		}
	});
});