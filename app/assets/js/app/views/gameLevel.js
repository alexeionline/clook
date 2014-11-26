define(['marionette', "text!templates/gameLevel.html"], function (Marionette, templateBody) {
	return Marionette.ItemView.extend({
		template: _.template(templateBody),

		timer: 16,

		events: {
			'click .answer': 'choose'
		},

		timeout: undefined,

		onRender: function () {
			this.updateTimer(this);
		},

		choose: function (e) {
			var playerAnswer = $(e.target).data('answer')
			  , rigthAnswer = this.model.get('answer')
				;

			clearTimeout(this.timeout);

			if (rigthAnswer == playerAnswer) {
				// if answer is correct
				// remove this question
				MyApp.levels.remove(this.model);

				// Add score
				MyApp.trigger('game:addScore', {
					currentScore: this.timer
				});

				$(e.target).addClass('right');

				// and show next level
				setTimeout(function () {
					Backbone.history.fragment = null;
					Backbone.history.navigate("gameLevel", { trigger: true });
				}, 2000);
				
			} else {
				$(e.target).addClass('false');

				setTimeout(function () {
					Backbone.history.navigate("gameOver", { trigger: true });
				}, 1000);
			}
		},

		updateTimer: function (ctx) {
			ctx.timer--;
			ctx.$el.find('.timer').text(ctx.timer);

			if (ctx.timer > 0) {
				ctx.timeout = setTimeout(function () {
					ctx.updateTimer(ctx)
				}, 1000);
			} else {
				clearTimeout(ctx.timeout);
				setTimeout(function () {
					Backbone.history.navigate("gameOver", { trigger: true });
				}, 1000);
			}

			
		}
	});
});