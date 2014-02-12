'use strict';

describe('Service: AngelloHelper', function () {

  // load the service's module
  beforeEach(module('angelloApp'));

  // instantiate service
  var AngelloHelper;
  beforeEach(inject(function (_AngelloHelper_) {
    AngelloHelper = _AngelloHelper_;
  }));

  it('should do something', function () {
    expect(!!AngelloHelper).toBe(true);
  });

});
