angular.module('stockMarketApp.services',[])

.factory('stockDataService', function($q, $http) {

  var getPriceData = function(ticker) {

  var deferred = $q.defer(),
  url = "https://feeds.finance.yahoo.com/rss/2.0/headline?s=" + ticker + "&region=US&lang=en-US";

  $http.get(url)
  .success(function(json) {
    var jsonData=json.list.resources[0].resource.fields;
    //console.log(jsonData.data.list.resources[0].resource.fields);
    deferred.resolve(jsonData);
  })
  .error(function(error){
    console.log("Price data error:" + error);
    deferred.reject();

  });
  return deferred.promise;

};
  return {
    getPriceData: getPriceData
  };

})

;
