'use strict';

/**
 * @ngdoc function
 * @name HotelReview.controller:HomeController
 * @description
 * # HomeController
 */
angular.module('HotelReview')
    .controller('HomeController',['$scope','accessKey','hotelData','$cordovaSocialSharing','$state', function($scope,accessKey,hotelData,$cordovaSocialSharing,$state) {
        $scope.hotelInfo = hotelData;
        $scope.accessKey = accessKey;
        /*include exclude taber functionality*/
        $scope.tab = 'reviews';
        $state.go('hotel.reviews');
        $scope.setTab = function (tabId) {
            $scope.tab = tabId;
            if(tabId === 'reviews'){
                $state.go('hotel.reviews')
            }else{
                $state.go('hotel.info')
            }
        };

        /*shocial sharing*/
        $scope.socialShare =  function() {
            $cordovaSocialSharing
                .share($scope.hotelInfo.name, "Interesting",accessKey.servicesUrl+'/photo?maxwidth=400&photoreference=$'+$scope.hotelInfo.photos[0].photo_reference, $scope.hotelInfo.website) // Share via native share sheet
                .then(function (result) {
                   console.log('success',result);
                    // Success!
                }, function (err) {
                    // An error occured. Show a message to the user
                });
        };

        /*accordian functionality*/
        $scope.toggleGroup = function(review) {
            if ($scope.isGroupShown(review)) {
                $scope.shownGroup = null;
            } else {
                $scope.shownGroup = review;
            }
        };

        $scope.isGroupShown = function(review) {
            return $scope.shownGroup === review;
        };


        $scope.getNumber = function(num) {
            return new Array(parseInt(num));
        };

        $scope.getOffer = function(num){
            var num = Math.floor((Math.random() * 10) + 10);
            return num;
        };
        $scope.offerVal = $scope.getOffer();
        $scope.disRandom = $scope.getOffer();


    }]);
