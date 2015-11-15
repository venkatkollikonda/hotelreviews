/**
 * Created by venkateswararao on 15-Nov-15.
 */
angular.module('HotelReview')
    .factory('InitialDataModelService', function() {
        var hotelData = {};
        return {
            setHotelData : function(data){
                hotelData = data;
            },
            getHotelImages : function(){
                return hotelData.photos;
            }
        }
    });
