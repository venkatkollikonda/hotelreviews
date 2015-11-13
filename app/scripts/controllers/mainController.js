'use strict';

/**
 * @ngdoc function
 * @name HotelReview.controller:MainController
 * @description
 * # MainController
 * This controller handles the side menu
 */
angular.module('HotelReview')
    .controller('MainController', ['$scope','HotelReviewService','$state','accessKey', function($scope,HotelReviewService,$state,accessKey) {
        $scope.accessKey = accessKey;
        $scope.backupKey = 'AIzaSyDfJu_fS4M96OobY1nioLG3Bu2MDXEzHDU';
        $scope.allHotels = [];

        $scope.getPlaces = function(lat,long) {
            HotelReviewService.getLocationHotels(lat,long,4000)
                .then(function(response) {
                    $scope.allHotels = returnCategoryRow(response.data.results, 2);
                    // close pull to refresh loader
                    //$ionicLoading.hide();
                    /*$scope.$broadcast('scroll.refreshComplete');*/
                });
        };

        $scope.getPlaces(1.2839,103.8515);


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






        // do something with $scope

        function returnCategoryRow (object,limit){
            var categoriesRow = {};
            var startIndex = 0;
            var count = limit;
            for(var i=0; i<object.length;i++){
                var slicedArray = object.slice(startIndex,getEndIndex(object.length,startIndex+count));
                if(slicedArray.length > 0){
                    categoriesRow[i] = slicedArray;
                }else{
                    return categoriesRow;
                }
                startIndex = getEndIndex(object.length,startIndex+count);
            }
        };

        function getEndIndex(length, endIndex){
            if(endIndex <= length){
                return endIndex;
            }else{
                return length;
            }
        };

        $scope.getOffer = function(){
            return Math.floor((Math.random() * 10) + 10);
        };

    }]);
