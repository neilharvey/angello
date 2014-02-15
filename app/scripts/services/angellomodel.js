'use strict';

angular.module('angelloApp')
  .factory('AngelloModel', function ($rootScope) {
      var statuses = [
          { name: 'To Do' },
          { name: 'In Progress' },
          { name: 'Code Review' },
          { name: 'QA Review' },
          { name: 'Verified' }
      ];

      var types = [
          { name: 'Feature' },
          { name: 'Enhancement' },
          { name: 'Bug' },
          { name: 'Spike' }
      ];

      var stories = [
          { id: 1, title: 'Story 00', description: 'Description pending.', criteria: 'Criteria pending.', status: 'To Do', type: 'Feature', reporter: 'Lukas Ruebbelke', assignee: 'Brian Ford' },
          { id: 2, title: 'Story 01', description: 'Description pending.', criteria: 'Criteria pending.', status: 'In Progress', type: 'Feature', reporter: 'Lukas Ruebbelke', assignee: 'Brian Ford' },
          { id: 3, title: 'Story 02', description: 'Description pending.', criteria: 'Criteria pending.', status: 'Code Review', type: 'Enhancement', reporter: 'Lukas Ruebbelke', assignee: 'Brian Ford' },
          { id: 4, title: 'Story 03', description: 'Description pending.', criteria: 'Criteria pending.', status: 'QA Review', type: 'Enhancement', reporter: 'Lukas Ruebbelke', assignee: 'Brian Ford' },
          { id: 5, title: 'Story 04', description: 'Description pending.', criteria: 'Criteria pending.', status: 'Verified', type: 'Bug', reporter: 'Lukas Ruebbelke', assignee: 'Brian Ford' },
          { id: 6, title: 'Story 05', description: 'Description pending.', criteria: 'Criteria pending.', status: 'To Do', type: 'Spike', reporter: 'Lukas Ruebbelke', assignee: 'Brian Ford' }
      ];

      var getStatuses = function () {
          return statuses;
      };

      var getTypes = function () {
          return types;
      };

      var getStories = function () {
          return stories;
      };

      var deleteStory = function (id) {
          stories.remove(function (s) {
              return s.id === id;
          });
      };

      var createStory = function (newStory) {
          newStory.id = new Date().getTime();
          stories.push(newStory);

          $rootScope.$broadcast('storiesChanged');
      };

      var insertStoryAfter = function (story, prevStory) {
          stories = stories.remove(function (t) {
              return t.id === story.id;
          });

          stories = stories.add(story, stories.findIndex(prevStory) + 1);
      };

      return {
          getStatuses: getStatuses,
          getTypes: getTypes,
          getStories: getStories,
          createStory: createStory,
          deleteStory: deleteStory,
          insertStoryAfter: insertStoryAfter
      };
  });
