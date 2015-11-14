/**
 * Created by venkateswararao on 15-Nov-15.
 */
angular.module('HotelReview')
    .controller('PreviewController',['$scope','accessKey','hotelData', function($scope,accessKey,hotelData) {
        $scope.accessKey = accessKey;
        $scope.images = hotelData.photos;
    }]);
