define(['backbone', "app/models/level", "app/defaultLevels"], function (Backbone, Level, defaultLevels) {
	return Backbone.Collection.extend({
		model: Level,
		initialize: function () {
			this.reset(_.shuffle(defaultLevels));
		}
	});
});