/**
 * Created by venkateswararao on 15-Nov-15.
 */
angular.module('HotelReview')
    .controller('PreviewController',['$scope','accessKey','InitialDataModelService', function($scope,accessKey,InitialDataModelService) {
        $scope.accessKey = accessKey;
        $scope.images = InitialDataModelService.getHotelImages();
    }]);
