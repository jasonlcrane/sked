'use strict';

angular.module('sked')
  .service('GameModel', function ($stateParams, contentful) {
    var service = this;

    // function getUrl() {
    //   return PCAPI_ENDPOINT_URI + CardModel.getCurrentCard().id + '/cards.json';
    // }

    service.getGames = function() {
      var games;
      // Get all entries
      console.log('getting games');
        var games = contentful
          .entries()
          .then(

            // Success handler
            function(response){
              var entries = response.data;
              console.log(entries);
              return entries;
            },

            // Error handler
            function(response){
              console.log('Oops, error ' + response.status);
            }
          );

          return games;
    }

    service.getCard = function(uid) {
      console.log(uid);
      var card = $localForage.getItem('card_' + uid).then(function(data) {
        return data;
      });
      return card;
    }

    service.saveCard = function(card) {
      return $localForage.setItem('card_' + card.id, card).then(function() {
        return service.getCards();
      });
    }

    service.deleteCard = function(uid) {
      return $localForage.removeItem('card_' + uid).then(function() {
          return uid;
      });
    }

  });
