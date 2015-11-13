/**
 * Created by venkateswararao on 12-Nov-15.
 */
angular.module('HotelReview')
    .factory('HotelReviewService', function($http,accessKey) {
        return {
            nearByPlacesUrl : '/nearbysearch/json',
            hotelInfoUrl :'/details/json',

            getLocationHotels : function(location,radius){
                return $http.get(accessKey.servicesUrl+this.nearByPlacesUrl+'?location=1.2839,103.8515'+'&radius=4000'+'&key=' + accessKey.key);
            },

            getHotelInfo : function(hotelId){
                return $http.get(accessKey.servicesUrl+this.hotelInfoUrl+'?placeid='+hotelId+'&key='+ accessKey.key);
            }

        }


    });

