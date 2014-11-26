define(['backbone'], function (Backbone) {
	return Backbone.Model.extend({
		defaults: {
			score: 0,
			bestResult: 0
		},

		initialize: function () {
			this.set('bestResult', localStorage.getItem('bestResult') || 0);

			MyApp.on('game:addScore', function (opt) {
				this.set('score', this.get('score') + opt.currentScore);

				if (this.get('score') > this.get('bestResult')) {
					this.set('bestResult', this.get('score'));
					localStorage.setItem('bestResult', this.get('bestResult'));
				}

			}, this);
		}
	});
});
