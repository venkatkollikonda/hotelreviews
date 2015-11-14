'use strict';

/**
 * @ngdoc function
 * @name HotelReview.controller:HomeController
 * @description
 * # HomeController
 */
angular.module('HotelReview')
    .controller('HomeController',['$scope','accessKey','hotelData', function($scope,accessKey,hotelData) {
        $scope.hotelInfo = hotelData;
        $scope.accessKey = accessKey;
        /*include exclude taber functionality*/
        $scope.tab = 'reviews';
        $scope.setTab = function (tabId) {
            $scope.tab = tabId;
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
