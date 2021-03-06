'use strict';

/**
 * @ngdoc overview
 * @name HotelReview
 * @description
 * # Initializes main application and routing
 *
 * Main module of the application.
 */


angular.module('HotelReview', ['ionic', 'ngCordova', 'ngResource', 'ngSanitize'])
    .constant("accessKey", {
        "key": "AIzaSyBS78r6tfw9ph1-XlD9-45I-TWhl0wAaqk",
        "servicesUrl":"https://maps.googleapis.com/maps/api/place"
    })

    .run(function($ionicPlatform) {

        $ionicPlatform.ready(function() {
            // save to use plugins here
        });

        // add possible global event handlers here

    })

    .config(function($httpProvider, $stateProvider, $urlRouterProvider) {
        // register $http interceptors, if any. e.g.
        // $httpProvider.interceptors.push('interceptor-name');

        // Application routing
        $stateProvider
            .state('hotels', {
                url: '/hotels',
                cache: true,
                templateUrl: 'templates/main.html',
                controller: 'MainController',
                resolve: {
                    InitialData : function(HotelReviewDataModelService){
                        return HotelReviewDataModelService.getInitialData(1.2839,103.8515);
                    }
                }
            })
            .state('hotel', {
                url: '/hotelInfo/:id',
                cache: true,
                templateUrl: 'templates/views/home.html',
                controller: 'HomeController',
                resolve: {
                    hotelData : function(HotelReviewDataModelService,$stateParams){
                        return HotelReviewDataModelService.getHotelInfo($stateParams.id);
                    }
                }
            })
            .state('hotel.reviews', {
                url: '/hotelInfo/:id/reviews',
                cache: true,
                templateUrl: 'templates/views/reviews.html',
                controller: 'ReviewsController'
            })
            .state('hotel.info', {
                url: '/hotelInfo/:id/info',
                cache: true,
                templateUrl: 'templates/views/info.html',
                controller: 'InfoController'
            })
            .state('preview', {
                url: '/preview',
                cache: true,
                templateUrl: 'templates/views/preview.html',
                controller: 'PreviewController'
            });


        // redirects to default route for undefined routes
        $urlRouterProvider.otherwise('/hotels');


    });


