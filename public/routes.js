/*
  Configure routes used with ngRoute. We chose not to use $locationProvider.html5Mode(true);
  because using HTML5 pushstate requires that server routes are setup to mirror the routes
  in this file. Since this isn't a node course we're going to skip it. For all intensive
  purposes, html5 mode and url hash mode perform the same when within an angular app.
*/
angular.module('myApp.routes', ['ngRoute', 'ngAnimate', 'ngResource'])

.run(['$anchorScroll', '$route', '$rootScope', '$location', '$routeParams','$templateCache', function($anchorScroll, $route, $rootScope, $location, $routeParams, $templateCache) {

$rootScope.pageLoading = true;


//a change of path should not reload the page
    var original = $location.path;
    $location.path = function (path, reload) {
        if (reload === false) {
            var lastRoute = $route.current;
            var un = $rootScope.$on('$locationChangeSuccess', function () {
                $route.current = lastRoute;
                un();
            });
        }
        else if (reload === true){
          var currentPageTemplate = $route.current.templateUrl;
          $templateCache.remove(currentPageTemplate);
        var un = $rootScope.$on('$locationChangeSuccess', function () {
              $route.current = 'worldoftheblonds/'+$routeParams.category+'/'+$routeParams.event;
              un();
              $route.reload();
          });
        }
        return original.apply($location, [path]);
    };
































  }])//run end



  .filter('trustUrl', function ($sce) {
      return function(url) {
          var trusted = $sce.trustAsResourceUrl(url);
          return trusted;
      };
    })






.config(['$routeProvider', '$locationProvider' ,'$sceProvider', function($routeProvider, $locationProvider, $sceProvider) {

$sceProvider.enabled(false);

  // use the HTML5 History API
  $locationProvider.html5Mode(true);

  $routeProvider


  // $locationChangeStart

    .when('/collection/:id', {
      templateUrl: 'collection/collection.html',
      controller: 'collectionCtrl'
    })

    .when('/collection', {
      templateUrl: 'collection/collection.html',
      controller: 'collectionCtrl'
    })

    .when('/stockists', {
      templateUrl: 'stockists/stockists.html',
      controller: 'stockistsCtrl'
    })

    .when('/committee', {
      templateUrl: 'committee/committee.html',
      controller: 'committeeCtrl'
    })

    .when('/about', {
      templateUrl: 'about/about.html',
      controller: 'aboutCtrl'
    })

    .when('/social', {
      templateUrl: 'social/social.html',
      controller: 'socialCtrl'
    })

    .when('/contact', {
      templateUrl: 'contact/contact.html',
      controller: 'contactCtrl'
    })






    /*............................. Take-all routing ........................*/


    .when('/', {
      // redirectTo: 'matthew30matthew30matthew'
      templateUrl: 'home/home.html',
      controller: 'homeCtrl',
      resolve: {
             function($q, $timeout) {
                var deferred = $q.defer();
                $timeout(function(){
                    return deferred.resolve();
                }, 200);
                return deferred.promise;
            }
        }

    })


    // put your least specific route at the bottom
    .otherwise({redirectTo: '/'})






}])

.controller('routeController', function($scope, $location, $rootScope, $routeParams, $timeout, $interval, $window){

$rootScope.location = $location.path();
$rootScope.firstLoading = true;








    $rootScope.windowHeight = $window.innerHeight;

    // var windowHeight;


    jQuery($window).resize(function(){
      $rootScope.windowHeight = $window.innerHeight;
      // windowHeight = angular.element($window).height(); // Window Height
      $rootScope.checkSize();
      $scope.landscapeFunction();

        $scope.$apply();
    });

    //..............................................................................mobile


    //....this is the function that checks the header of the browser and sees what device it is

    $rootScope.isMobile, $rootScope.isDevice, $rootScope.isMobileDevice;
    $rootScope.checkSize = function(){


        $rootScope.checkDevice = {
              Android: function() {
                  return navigator.userAgent.match(/Android/i);
              },
              BlackBerry: function() {
                  return navigator.userAgent.match(/BlackBerry/i);
              },
              iOS: function() {
                  return navigator.userAgent.match(/iPhone|iPad|iPod/i);
              },
              Opera: function() {
                  return navigator.userAgent.match(/Opera Mini/i);
              },
              Windows: function() {
                  return navigator.userAgent.match(/IEMobile/i);
              },
              any: function() {
                  return ($rootScope.checkDevice.Android() || $rootScope.checkDevice.BlackBerry() || $rootScope.checkDevice.iOS() || $rootScope.checkDevice.Opera() || $rootScope.checkDevice.Windows());
              }
          };

        //........checks the width

          $scope.mobileQuery=window.matchMedia( "(max-width: 767px)" );
          $rootScope.isMobile=$scope.mobileQuery.matches;


        //.........returning true if device

          if ($scope.checkDevice.any()){
            $rootScope.isDevice= true;

          }else{
              $rootScope.isDevice=false;
          }

          if (($rootScope.isDevice==true)&&($scope.isMobile==true)){
            $rootScope.isMobileDevice= true;
          }else{
              $rootScope.isMobileDevice=false;
          }




            if ($rootScope.isDevice){

                $rootScope.mobileLocation = function(url){
                  $location.path(url).search();
                }

                $rootScope.mobileExternalLocation = function(url){
                  $window.open(url, '_blank');
                }


            } else if (!$rootScope.isDevice){


                $rootScope.mobileLocation = function(url){
                  return false;
                }

                $rootScope.mobileExternalLocation = function(url){
                  return false;
                }
            }





      }//checkSize


    $rootScope.checkSize();




     $rootScope.landscapeView = false;


     //function removing website if landscape

      $scope.landscapeFunction = function(){

        if ($rootScope.isMobile==true){
            if(window.innerHeight < window.innerWidth){
              $rootScope.landscapeView = true;
              $rootScope.pageLoading = true;
              jQuery(".landscape-view-wrapper").css({
                "width":"100vw",
                "height": "100vh",
                "display": "block"
            });

            }else{
              $rootScope.landscapeView = false;
              $rootScope.pageLoading = false;

            }
        }

      }

    $scope.landscapeFunction();
























        $rootScope.Collection;



            //..........................................................GET

            $rootScope.getContentType = function(type, orderField){

                  Prismic.Api('https://staple.cdn.prismic.io/api', function (err, Api) {
                      Api.form('everything')
                          .ref(Api.master())

                          .query(Prismic.Predicates.at("document.type", type))
                          .orderings('['+orderField+']')
                          .submit(function (err, response) {

                              var Data = response;

                              setTimeout(function(){

                                $rootScope.pageLoading = false;
                                $rootScope.$apply();
                              }, 500);

                              if(type =='collection'){
                                $rootScope.Collection = response.results;
                                $rootScope.$broadcast('collectionDone');
                                console.log($rootScope.Collection);
                              }

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

            // if ($rootScope.firstLoading == false){
              $rootScope.getContentType('collection', 'my.collection.date desc');

            //
            // }










})//......end of the route controller


.directive('closeRightDirective', function($rootScope, $location, $window, $routeParams, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'components/close-right.html',
    replace: true,
    link: function(scope, elem, attrs) {

    }
  };
})
.directive('closeLeftDirective', function($rootScope, $location, $window, $routeParams, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'components/close-left.html',
    replace: true,
    link: function(scope, elem, attrs) {

    }
  };
})

.directive('pageLoadingSpinner', function($rootScope, $location, $window, $routeParams, $timeout) {
  return {
    restrict: 'A',
    // templateUrl: 'components/loader.html',
    replace: true,
    link: function(scope, elem, attrs) {

      //
      // $rootScope.$on('$routeChangeStart', function() {
      //
      //     $rootScope.pageLoading = true;
      //     scope.logoHide = true;
      //
      // });
      //
      //
      // $rootScope.$on('$routeChangeSuccess', function() {
      //
      //   // $timeout(function () {
      //     scope.logoHide = false;
      //     $rootScope.pageLoading = false;
      //   // }, 1000);
      //
      //
      // });

    }
  };
});
