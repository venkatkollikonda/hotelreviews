/**
 * Created by venkateswararao on 14-Nov-15.
 */
angular.module('HotelReview')
    .service('HotelReviewDataModelService', function(HotelReviewService) {

        var service = {
            getInitialData : function(lat,lang){
                return HotelReviewService.getLocationHotels(lat,lang).then(function(response){
                    if(response.data.status === 'OK'){
                        return service.ProcessInitialData(response.data.results,2);
                    }else{

                    }
                })
            },

            ProcessInitialData : function(object,limit){
                var categoriesRow = {};
                var startIndex = 0;
                var count = limit;
                for(var i=0; i<object.length;i++){
                    var slicedArray = object.slice(startIndex,this.getEndIndex(object.length,startIndex+count));
                    if(slicedArray.length > 0){
                        categoriesRow[i] = slicedArray;
                    }else{
                        return categoriesRow;
                    }
                    startIndex = this.getEndIndex(object.length,startIndex+count);
                }
            },

            getEndIndex : function(length, endIndex){
                if(endIndex <= length){
                    return endIndex;
                }else{
                    return length;
                }
            },

            getHotelInfo : function(id){
                return HotelReviewService.getHotelInfo(id).then(function(response){
                    if(response.data.status === 'OK'){
                        return response.data.result;
                    }else{

                    }
                })
            }

        };
        return service;
    });
