/**
 * Created by venkateswararao on 15-Nov-15.
 */
angular.module('HotelReview')
    .controller('PreviewController',['$scope','accessKey','InitialDataModelService','$state', function($scope,accessKey,InitialDataModelService,$state) {
        $scope.accessKey = accessKey;
        $scope.images = InitialDataModelService.getHotelImages();
        if($scope.images === undefined){
            $state.go('hotels');
        }
    }]);
