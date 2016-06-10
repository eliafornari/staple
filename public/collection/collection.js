

var Collection = angular.module('myApp');


Collection.controller('collectionCtrl', function($scope, $location, $rootScope, $routeParams, $timeout,	$http, $sce, instaFactory, anchorSmoothScroll){

$rootScope.mainCollection;
$scope.mainIndex = 0;




// $rootScope.$watch(
//     "Collection",
//     function handleFooChange( newValue, oldValue ) {
        // if(newValue != oldValue){
        setTimeout(function(){
          $rootScope.mainCollection = $rootScope.Collection[0];
          $scope.$apply();
        }, 1000);

        // }
//     }
// );
//


$rootScope.nextCollection = function(x) {

  if($scope.mainIndex<($rootScope.Collection.length-1)){
      $scope.mainIndex = $scope.mainIndex + 1;
      $rootScope.mainCollection = $rootScope.Collection[$scope.mainIndex];
      console.log("befo the bound");
  }
  else if($scope.mainIndex>=0){
    $scope.mainIndex = 0;
    $rootScope.mainCollection = $rootScope.Collection[$scope.mainIndex];
    console.log("over the bound");
  }
  anchorSmoothScroll.scrollTo('collection-'+$rootScope.Collection[$scope.mainIndex].uid);
  // var g;
  // for (var i=0; i < $rootScope.Collection.length; i++){
  //   if ($rootScope.Collection[i].uid == $rootScope.mainCollection.uid){
  //
  //     if(i<$rootScope.Collection.length){
  //       g = i++
  //     }else if(i>=$rootScope.Collection.length){
  //       g = 0
  //     }
  //     // anchorSmoothScroll.scrollTo('collection-'+$rootScope.Collection[g].uid);
  //   }
  // }

};


$rootScope.previousCollection = function() {
      if($scope.mainIndex>0){
          $scope.mainIndex = $scope.mainIndex - 1;
          $rootScope.mainCollection = $rootScope.Collection[$scope.mainIndex];
      }
      else if($scope.mainIndex<=0){
        $scope.mainIndex = $rootScope.Collection.length -1;
        $rootScope.mainCollection = $rootScope.Collection[$scope.mainIndex];
      }


  anchorSmoothScroll.scrollTo('collection-'+$rootScope.Collection[$scope.mainIndex].uid);


  // for (var i=0; i < $rootScope.Collection.length; i++){
  //   console.log('loop: '+i);
  //   // if ($rootScope.Collection[i].uid == $rootScope.mainCollection.uid){
  //   //   if(i>0){
  //   //     g = i--
  //   //     console.log('g: '+g);
  //   //   }else if(i<=0){
  //   //     g = $rootScope.Collection.length;
  //   //     console.log('g: '+g);
  //   //   }
  //   //
  //   //   //   $rootScope.mainCollection=$rootScope.Collection[i];
  //   //   // anchorSmoothScroll.scrollTo('collection-'+$rootScope.Collection[g].uid);
  //   // }
  // }

};















var scroll,windowheight;

windowheight = window.innerHeight;

setTimeout(function(){


// $scope.collectionPositions=[];
//
//   for (i in $rootScope.Collection){
//     var artistPosition =  jQuery('#collection-'+$rootScope.Collection[i].uid).offset().top;
//     artistPosition = windowheight*i;
//     var object = {
//                     "index": i,
//                     "name": $rootScope.Collection[i].uid,
//                     "offset":artistPosition
//                   }
//
//     $scope.collectionPositions = $scope.collectionPositions.concat(object);
//   }

$(function() {

   $(".collection-season").mousewheel(function(event, delta) {

      console.log(event.deltaX, event.deltaY, event.deltaFactor);

      this.scrollLeft -= (delta * 0.4);

      event.preventDefault();

   });

});


    // jQuery('.collection').bind("scroll.collection", function(event) {
    //
    //     scroll = jQuery('.collection').scrollTop();


        // $('.collection-season').scrollLeft(scroll);


      //   for (i in $scope.collectionPositions){
       //
      //     if((scroll > ($scope.collectionPositions[i].offset - 1)) && (scroll < ($scope.collectionPositions[i].offset + windowheight -1 ))){
      //       $rootScope.mainCollection=$rootScope.Collection[i];
      //       $scope.mainIndex=i;
      //       console.log($scope.mainIndex);
      //       console.log($rootScope.mainCollection.uid);
      //       $scope.$apply();
       //
       //
      //     }else{
      //     }
      //  }//for loop

    //     $scope.$apply();
    //
    // });//scroll bind


    // $scope.$on('destroy', function(){
    //   jQuery(window).unbind("scroll.collection");
    // });



}, 1500);


});//end od controller
