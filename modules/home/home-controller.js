'use strict';

/**
 * @ngdoc function
 * @name sked.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Home controller of sked
 */
angular.module('sked')
	.controller('HomeCtrl',
		['$state', '$stateParams', 'GameModel', 'uiGmapGoogleMapApi', function ($state, $stateParams, GameModel, uiGmapGoogleMapApi) {

			var home = this,
				map;

			home.games = [];
			home.tmpGames = {};
			home.showmap = false;

			home.getGames = function() {
				GameModel.getGames()
					.then(function(games) {
						home.tmpGames = (games.items !== 'null') ? games.items : {};
						parseGames(home.tmpGames);
					});
			}

			home.filterTime = function(datetime) {
				console.log(datetime);
				var time = 'Time TBA';
				if (datetime.indexOf('T') !== -1) {
					var time = datetime;
				}
				return time;
			}

			var parseGames = function() {
				angular.forEach(home.tmpGames, function(game, i) {
					console.log(game);
					var marker = makeMarker(i, game.fields.gameLocation.lat, game.fields.gameLocation.lon);
					game.fields.marker = marker;
					var map = makeMap(game.fields.gameLocation.lat, game.fields.gameLocation.lon);
					game.fields.map = map;
					home.games.push(game.fields);



				  })
			}

			var makeMarker = function(id, lat, lng) {
				var marker = {
			      id: id,
			      coords: {
			        latitude: lat,
			        longitude: lng
			      },
			      options: { draggable: true }
			    };

			    return marker;
			}
			var makeMap = function(lat, lng) {
				console.log(lat);
				return { center: { latitude: lat, longitude: lng }, zoom: 14 };
			}

			uiGmapGoogleMapApi.then(function(maps) {
				// console.log('maps');
				// map = 
    		});

			home.getGames();

		}]
	);