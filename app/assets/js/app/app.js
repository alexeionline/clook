define(["marionette", "app/layout"], function (Marionette, AppLayoutView) {
	return Marionette.Application.extend({
		createLayout: function () {
			this.layout = new AppLayoutView();
			this.layout.render().$el.appendTo('.app');
		}
	});
});