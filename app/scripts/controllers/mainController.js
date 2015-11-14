'use strict';

/**
 * @ngdoc function
 * @name HotelReview.controller:MainController
 * @description
 * # MainController
 * This controller handles the side menu
 */
angular.module('HotelReview')
    .controller('MainController', ['$scope','HotelReviewService','$state','accessKey','InitialData', function($scope,HotelReviewService,$state,accessKey,InitialData) {
        $scope.accessKey = accessKey;
        $scope.backupKey = 'AIzaSyC12UlFrlR4o57BJVsbKhcf43ECn7UuUAM';
        $scope.allHotels = InitialData;

        $scope.getOffer = function(){
            var num = Math.floor((Math.random() * 10) + 10);
            return num;
        };


        /*document.addEventListener("deviceready", onDeviceReady, false);

         function onDeviceReady() {

         //console.log("on device ready "+ navigator.geolocation.getCurrentPosition());

         /!* $ionicLoading.show({
         content: 'getting location ...',
         animation: 'fade-in',
         showBackdrop: false,
         maxWidth: 200,
         showDelay: 0
         });*!/

         navigator.geolocation.getCurrentPosition(function(position) {
         console.log("latitude "+position.coords.latitude +" longitude "+ position.coords.longitude);
         alert("latitude "+position.coords.latitude +" longitude "+ position.coords.longitude);
         $scope.getPlaces(position.coords.latitude,position.coords.longitude);

         });

         //var posOptions = {timeout: 10000, enableHighAccuracy: false};
         //$cordovaGeolocation
         //    .getCurrentPosition(posOptions)
         //    .then(function (position) {
         //        var lat  = position.coords.latitude
         //        var long = position.coords.longitude
         //    }, function(err) {
         //        // error
         //    });

         }
         */


    }]);
