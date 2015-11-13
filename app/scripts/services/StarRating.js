/**
 * Created by venkateswararao on 12-Nov-15.
 */
angular.module('HotelReview')
    .directive('starRating', function() {
        return {
            replace:true,
            restrict:'E',
            scope: {
                rating : '='
            },
            template:'<ul class="ratingStars">'+
            '<li ng-repeat="star in stars" ng-class="{filled: star.filled}">'+'<icon class="ion-ios-star-outline"></icon>'+'</li>'+
            '</ul>',
            link:function(scope,elament,att){
                scope.maxRate = 5;
                scope.rating = parseInt(scope.rating);
                console.log(scope.rating);
                function updateStars() {
                    scope.stars = [];
                    for (var i = 0; i < scope.maxRate; i++) {
                        scope.stars.push({
                            filled: i < scope.rating
                        });
                    }
                };

                scope.$watch('rating', function() {
                    updateStars();
                });
            }
        }
    });
