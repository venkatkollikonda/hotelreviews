/**
 * Created by venkateswararao on 15-Nov-15.
 */
angular.module('HotelReview')
    .controller('ReviewsController', ['$scope','accessKey','hotelData', function($scope,accessKey,hotelData) {
        $scope.reviews = hotelData.reviews;
    }]);
