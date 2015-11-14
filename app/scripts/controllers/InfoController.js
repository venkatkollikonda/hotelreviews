/**
 * Created by venkateswararao on 15-Nov-15.
 */
angular.module('HotelReview')
    .controller('InfoController', ['$scope','accessKey','hotelData', function($scope,accessKey,hotelData) {
        $scope.hotelInfo = hotelData;
    }]);
