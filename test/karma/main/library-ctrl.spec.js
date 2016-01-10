'use strict';

describe('module: main, controller: LibraryCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var LibraryCtrl;
  beforeEach(inject(function ($controller) {
    LibraryCtrl = $controller('LibraryCtrl');
  }));

  it('should do something', function () {
    expect(!!LibraryCtrl).toBe(true);
  });

});
