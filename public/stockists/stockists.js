var Stockists = angular.module('myApp');




Stockists.filter('mapsFilter', function ($sce) {
    return function(x,y) {

      console.log(x);
      console.log(y);

      var newUrl = 'https://www.google.com/maps/embed/v1/view?key=AIzaSyDlRnfLb1kcfhll7bM6gonsQfhaR1ICJ4A&center='+x+y+'&zoom=18&maptype=satellite';
      console.log(newUrl);

        var trusted = $sce.trustAsResourceUrl(newUrl);
        return trusted;
    };
  })



Stockists.controller('stockistsCtrl', function($scope, $location, $rootScope, $routeParams, $timeout,	$http){


  $rootScope.pageLoading = true;
  $rootScope.Stockist = [];
  $scope.mainStockist;


  setTimeout(function(){
    $rootScope.viewLoaded = true;
    $rootScope.pageLoading = false;
    $scope.$apply();
  }, 500);



    //setting an animation class for this specific page
    $scope.pageClass = 'page-stockists';










      $rootScope.getStockist = function(type, orderField){

            Prismic.Api('https://staple.cdn.prismic.io/api', function (err, Api) {
                Api.form('everything')
                    .ref(Api.master())

                    .query(Prismic.Predicates.at("document.type", type))
                    .orderings('['+orderField+']')
                    .submit(function (err, response) {

                        var Data = response;

                          $rootScope.pageLoading = false;

                          $rootScope.Stockist = response.results;
                          $scope.mainStockist = response.results[0];
                          $rootScope.$broadcast('stockistDone');
                          console.log($rootScope.Stockist);
                          $rootScope.$apply();

                        // The documents object contains a Response object with all documents of type "product".
                        var page = response.page; // The current page number, the first one being 1
                        var results = response.results; // An array containing the results of the current page;
                        // you may need to retrieve more pages to get all results
                        var prev_page = response.prev_page; // the URL of the previous page (may be null)
                        var next_page = response.next_page; // the URL of the next page (may be null)
                        var results_per_page = response.results_per_page; // max number of results per page
                        var results_size = response.results_size; // the size of the current page
                        var total_pages = response.total_pages; // the number of pages
                        var total_results_size = response.total_results_size; // the total size of results across all pages
                        return results;
                    });
              });
      };

      $rootScope.getStockist('stockist', 'my.stockist.name');













$scope.thisStockist = function(uid){

    for (i in  $rootScope.Stockist){

      if (uid == $rootScope.Stockist[i].uid)
        $scope.mainStockist = $rootScope.Stockist[i];
          console.log(uid);
    }
}









$scope.mapFilter = function(lat, long){



        var newUrl = 'https://www.google.com/maps/embed/v1/view?key=AIzaSyDlRnfLb1kcfhll7bM6gonsQfhaR1ICJ4A&center='+lat+','+long+'&zoom=18&maptype=roadmap';
        console.log(newUrl);

          // var trusted = $sce.trustAsResourceUrl(newUrl);
          return newUrl;

}










});
