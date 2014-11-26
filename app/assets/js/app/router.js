define(["marionette", "app/controller"], function (Marionette, MyController) {
	return Marionette.AppRouter.extend({
		controller: new MyController,

		appRoutes: {
			"": "splashPage",
			"mainMenu": "mainMenu",
			"gameLevel": "gameLevel",
			"gameOver": "gameOver",
			"playAgain": "playAgain",
			"moneyShop": "moneyShop",
			"highScore": "highScore"
		}
	});
});