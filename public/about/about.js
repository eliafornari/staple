

var About = angular.module('myApp');


About.controller('aboutCtrl', function($scope, $location, $rootScope, $routeParams, $timeout,	$http, $sce, instaFactory, anchorSmoothScroll){

$rootScope.About ={};


            $http({
              url: '/about/about.json',
              method: 'get',
              cache: true,
              isArray: false

            }).then(function successCallback(response) {

              $rootScope.About = response.data.list;

              console.log(response.data);

            }, function errorCallback(response) {

              console.log(response);
              console.log("an error occurred");

            });























      $rootScope.mainAbout;
      $scope.aboutIndex = 0;




      $rootScope.$watch(
          "About",
          function handleFooChange( newValue, oldValue ) {
              if(newValue != oldValue){
              setTimeout(function(){
                $rootScope.mainAbout = $rootScope.About[0];
                $scope.$apply();
              }, 600);

              }
          }
      );



      $rootScope.nextAbout = function(x) {

        if($scope.aboutIndex<($rootScope.About.length-1)){
            $scope.aboutIndex = $scope.aboutIndex + 1;
            $rootScope.mainAbout = $rootScope.About[$scope.aboutIndex];
            console.log("befo the bound");
            console.log($scope.aboutIndex);
            console.log($rootScope.About[$scope.aboutIndex].uid);
            anchorSmoothScroll.scrollTo('about-'+$rootScope.About[$scope.aboutIndex].uid);
        }
        else if($scope.aboutIndex>=0){
          $scope.aboutIndex = 0;
          $rootScope.mainAbout = $rootScope.About[$scope.aboutIndex];

          anchorSmoothScroll.scrollTo('about-'+$rootScope.About[$scope.aboutIndex].uid);
        }



      };


      $rootScope.previousAbout = function() {
            if($scope.aboutIndex>0){
                $scope.aboutIndex = $scope.aboutIndex - 1;
                $rootScope.mainAbout = $rootScope.About[$scope.mainIndex];


                console.log($scope.aboutIndex);
                console.log($rootScope.About[$scope.aboutIndex].uid);
                console.log("befo the bound");
                anchorSmoothScroll.scrollTo('about-'+$rootScope.About[$scope.aboutIndex].uid);
            }
            else if($scope.aboutIndex<=0){
              $scope.aboutIndex = $rootScope.About.length -1;
              $rootScope.mainAbout = $rootScope.About[$scope.aboutIndex];


              console.log($scope.aboutIndex);
              console.log($rootScope.About[$scope.aboutIndex].uid);
              console.log("over the bound");
              anchorSmoothScroll.scrollTo('about-'+$rootScope.About[$scope.aboutIndex].uid);

            }




      };








setTimeout(function(){


    $(function() {

       $(".about-section").mousewheel(function(event, delta) {

          console.log(event.deltaX, event.deltaY, event.deltaFactor);

          this.scrollLeft -= (delta * 0.4);

          event.preventDefault();

       });

    });


}, 600);




});//end od controller
