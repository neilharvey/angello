'use strict';

angular.module('angelloApp')
  .controller('MainCtrl', function ($scope, AngelloModel, AngelloHelper) {
      $scope.currentStory = null;
      $scope.currentStatus = null;
      $scope.currentType = null;
      $scope.editedStory = {};

      $scope.types = AngelloModel.getTypes();
      $scope.statuses = AngelloModel.getStatuses();
      $scope.stories = AngelloModel.getStories();
      $scope.typesIndex = AngelloHelper.buildIndex($scope.types, 'name');
      $scope.statusesIndex = AngelloHelper.buildIndex($scope.statuses, 'name');

      $scope.setCurrentStory = function (story) {
          $scope.currentStory = story;
          $scope.editedStory = angular.copy($scope.currentStory);

          $scope.currentStatus = $scope.statusesIndex[story.status];
          $scope.currentType = $scope.typesIndex[story.type];
      };

      $scope.createStory = function () {
          AngelloModel.createStory($scope.editedStory);
          $scope.resetForm();
      };

      $scope.updateStory = function () {
          var fields = ['title', 'description', 'criteria', 'status', 'type', 'reporter', 'assignee'];

          fields.forEach(function (field) {
              $scope.currentStory[field] = $scope.editedStory[field]
          });

          $scope.resetForm();
      };

      $scope.updateCancel = function () {
          $scope.resetForm();
      };

      $scope.resetForm = function () {
          $scope.currentStory = null;
          $scope.currentStatus = null;
          $scope.currentType = null;
          $scope.editedStory = {};

          $scope.detailsForm.$setPristine();
      };

      $scope.setCurrentStatus = function (status) {
          $scope.editedStory.status = status.name;
      };

      $scope.setCurrentType = function (type) {
          $scope.editedStory.type = type.name;
      };

      $scope.detailsVisible = true;
      $scope.setDetailsVisible = function (visible) {
          $scope.detailsVisible = visible;
      };
  });