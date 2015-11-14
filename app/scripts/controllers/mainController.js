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
        $scope.backupKey = 'AIzaSyASDNxC_49sPt0_NWnEAQzf3SjW41WGSlc';
        $scope.allHotels = InitialData;

        $scope.getOffer = function(){
            var num = Math.floor((Math.random() * 10) + 10);
            return num;
        };

        /*for distance*/
        $scope.getDistanceFromLatLonInKm = function(lat1,lon1,lat2,lon2) {
            var R = 6371; // Radius of the earth in km
            var dLat = deg2rad(lat2-lat1);  // deg2rad below
            var dLon = deg2rad(lon2-lon1);
            var a =
                    Math.sin(dLat/2) * Math.sin(dLat/2) +
                    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                    Math.sin(dLon/2) * Math.sin(dLon/2)
                ;
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            var d = R * c; // Distance in km
            return Math.floor(d);
        }

        function deg2rad(deg) {
            return deg * (Math.PI/180)
        }

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
