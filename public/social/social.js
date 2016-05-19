var Social = angular.module('myApp');

Social.controller('socialCtrl', function($scope, $location, $rootScope, $routeParams, $timeout,	$http, instaFactory){


  $rootScope.pageLoading = true;

  setTimeout(function(){
    $rootScope.viewLoaded = true;
    $rootScope.pageLoading = false;
    $scope.$apply();
  }, 500);



    //setting an animation class for this specific page
    $scope.pageClass = 'page-social';












  // $scope.instagram_p = function(){
  //   instaFactory.pullimages('184572270', 4).then( function(data) {
  //     console.log(data);
  //         $scope.Social = $rootScope.instaTotal;
  //         console.log($scope.Social);
  //       }, function(error) {
  //     });
  // }
  //
  //
  //   $scope.instagram_p();







    $http({url: '/data', method: 'get', cache: true, isArray:true})

    .success(function(response1){

      $rootScope.instaTotal = response1.data;
      console.log($rootScope.instaTotal);

    });








// var token = '577673350-DuHdWQQcvCKRDM0j4fCda40ZTrIGmdTqoaC8mKd8';
//
//
//
//
//
//     // access_token: 	577673350-DuHdWQQcvCKRDM0j4fCda40ZTrIGmdTqoaC8mKd8
//
//     //twitter
//     // https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=twitterapi&count=2
//     var twitterEndpoint = 'https://api.twitter.com/1.1/statuses/staplepigeon.json?access_token='+token+'?screen_name=twitterapi&count=2';
//
//           $http({
//             url: twitterEndpoint,
//             method: 'JSONP',
//             cache: true,
//             isArray: true
//
//           }).success(function(response1){
//             console.log(response1);
//           });
//
//
//
//
//           var app = http.createServer(function(request, response) {
//           response.writeHead(200, {
//             "Content-Type": "text/plain"
//           });
//           response.end("Hello world!\n");
//         });



});
