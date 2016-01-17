'use strict';
angular.module('main')
.controller('LibraryCtrl', function ($log, $scope, $cordovaImagePicker, LocalStore) {

  $log.log('Hello from your Controller: LibraryCtrl in module main:. This is your controller:', this);

//  this.ENV = Config.ENV;
//  this.BUILD = Config.BUILD;
  this.imageKey = 'images';
  $scope.ready = false;
  $scope.images = [];
  $scope.imageWithname = {};


  $scope.selImages = function () {

    var options = {
      maximumImagesCount: 10,
      width: 800,
      height: 800,
      quality: 80
    };

    $cordovaImagePicker.getPictures(options).then(
      function (results) {
        for (var i = 0; i < results.length; i++) {
          $log.log('Image URI: ' + results[i]);
          $scope.images.push(results[i]);
        }
        LocalStore.setObject(this.imageKey, $scope.images);
        if (!$scope.$$phase) {
          $scope.$apply();
        }
      }, function (error) {
      $log.log('Error: ' + error);
    }
    );

  };

});
