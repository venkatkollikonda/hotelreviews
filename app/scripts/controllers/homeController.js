'use strict';

/**
 * @ngdoc function
 * @name HotelReview.controller:HomeController
 * @description
 * # HomeController
 */
angular.module('HotelReview')
    .controller('HomeController', function($scope, HotelReviewService,$stateParams,$state,accessKey) {
        $scope.hotelInfo = {};
        $scope.accessKey = accessKey;
        $scope.getPlacesInfo = function() {
         HotelReviewService.getHotelInfo($stateParams.id)
         .then(function(response) {
         $scope.hotelInfo = response.data.result;
         });
         };
         $scope.getPlacesInfo();


        /*include exclude taber functionality*/
        $scope.tab = 'reviews';
        $scope.setTab = function (tabId) {
            $scope.tab = tabId;
        };


        /*
         * if given group is the selected group, deselect it
         * else, select the given group
         */
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

        $scope.getOffer = function(){
            return Math.floor((Math.random() * 10) + 10);
        };

    });
