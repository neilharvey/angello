'use strict';

angular.module('angelloApp')
.directive('userstory', function (AngelloModel) {
    var linker = function (scope, element, attrs) {
        element
            .mouseover(function () {
                element.css({ 'opacity': 0.9 });
            })
            .mouseout(function () {
                element.css({ 'opacity': 1.0 })
            });
    };

    var controller = function ($scope) {
        $scope.deleteStory = function (id) {
            AngelloModel.deleteStory(id);
        };
    };

    return {
        restrict: 'A',
        controller: controller,
        link: linker
    };
});
