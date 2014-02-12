'use strict';

angular.module('angelloApp')
  .controller('DashboardCtrl', function ($scope, AngelloModel) {
      $scope.types = AngelloModel.getTypes();
      $scope.statuses = AngelloModel.getStatuses();
      $scope.stories = AngelloModel.getStories();
  });
