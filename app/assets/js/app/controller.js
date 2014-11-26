define([
		"marionette", 

		"app/views/splashPage",
		"app/views/mainMenu",
		"app/views/gameLevel",
		"app/views/gameResult",
		"app/views/moneyShop",
		"app/views/scoreHeader",
		"app/views/highScore",

		"app/models/gameScore",

		"app/collections/levels"

	], function (
		Marionette, 

		SplashPageView,
		MainMenuView,
		GameLevelView,
		GameResultView,
		MoneyShopView,
		ScoreHeaderView,
		HighScoreView,

		GameScore,

		Levels

	) {
	return Marionette.Controller.extend({
		splashPage: function () {
 			// show splash page and get new resources from server

 			MyApp.levels = new Levels;
 			MyApp.layout.page.show(new SplashPageView);
		},

		mainMenu: function () {
			// show main menu

			MyApp.gameScore = new GameScore;
 			MyApp.layout.page.show(new MainMenuView);
 			MyApp.layout.header.empty();
		},

		playAgain: function () {
			// reset the counters and start the game
			
			MyApp.levels = new Levels;
			MyApp.gameScore = new GameScore;
			Backbone.history.navigate("gameLevel", { trigger: true });
		},

		gameLevel: function () {
			// show game level
			
			// get question
			var currentLevel = MyApp.levels.at(0);

			if (!currentLevel) {
				Backbone.history.navigate("gameOver", { trigger: true });
				return;
			}

			var gameLevelView = new GameLevelView({
				model: currentLevel
			});

			var scoreHeaderView = new ScoreHeaderView({
				model: MyApp.gameScore
			});

 			MyApp.layout.page.show(gameLevelView);
 			MyApp.layout.header.show(scoreHeaderView);
		},

		gameOver: function () {
			// show game results
			
			var gameResultView = new GameResultView({
				model: MyApp.gameScore
			});

			MyApp.layout.page.show(gameResultView);
 			MyApp.layout.header.empty();
		},

		moneyShop: function () {
			// show shop where you can buy something
			
 			MyApp.layout.page.show(new MoneyShopView);
		},

		highScore: function () {
			var highScoreView = new HighScoreView({
				model: MyApp.gameScore
			});

 			MyApp.layout.page.show(highScoreView);

		}
	});
});