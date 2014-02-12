'use strict';

describe('Directive: userstory', function () {

  // load the directive's module
  beforeEach(module('angelloApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<userstory></userstory>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the userstory directive');
  }));
});
