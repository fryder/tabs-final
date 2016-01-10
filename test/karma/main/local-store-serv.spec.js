'use strict';

describe('module: main, service: LocalStore', function () {

  // load the service's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate service
  var LocalStore;
  beforeEach(inject(function (_LocalStore_) {
    LocalStore = _LocalStore_;
  }));

  it('should do something', function () {
    expect(!!LocalStore).toBe(true);
  });

});
