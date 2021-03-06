angular.module('app.controllers').controller('influences.tabs',function ($scope, influencesCD, facebook, profile) {

  var user = profile.get();
  if (user && user.facebook_id) {
    facebook.loadFriends();
  }

  $scope.switchView = function (view) {
    influencesCD.view = view;
  };

  $scope.tabLinkClass = function (view) {
    return influencesCD.view === view ? 'active' : '';
  };

})