

var Committee = angular.module('myApp');


Committee.controller('committeeCtrl', function($scope, $location, $rootScope, $routeParams, $timeout,	$http, $sce, instaFactory){

$scope.success = false;
$scope.error = false;
$scope.committeeForm = {};
$scope.committeeForm.equipment = {
   roles: ['user']
 };



$scope.completedForm = false;
$scope.committeeStatus = 0;
$scope.committeeProgress = 0;


$scope.nextSectionCommittee=function(){
  $scope.committeeStatus = $scope.committeeStatus + 1;
}

$scope.prevSectionCommittee=function(){
  $scope.committeeStatus = $scope.committeeStatus - 1;
}






$scope.$watch(
    "committeeStatus",
    function handleFooChange( newValue, oldValue ) {
        if(newValue != oldValue){

          $scope.committeeProgress = ($scope.committeeStatus/19)*100;
          $scope.committeePercentage = Math.round($scope.committeeStatus/19*100)

        }
    }
);








  // process the form
  $scope.processFormCommittee = function() {

    // $scope.committeeForm.mandrill_subject = $scope.committeeForm.subject.toUpperCase() + " REQUEST FROM STAPLEPIGEON.COM"

     var mandrill = {
          "key": "",
          "message": {
              "html": $scope.committeeForm.body,
              "text": $scope.committeeForm.body,
              "from_email": $scope.committeeForm.email,
              "from_name": $scope.committeeForm.name,
              "to": [
                  {
                      "email": "dev@eliafornari.com",
                      "name": "STAPLEPIGEON.COM",
                      "type": "to"
                  }
              ],
              "headers": {
                  "Reply-To": $scope.formData.email
              }

          }
      }


$http({
  method  : 'POST',
  dataType: 'JSON',
  url     : 'https://mandrillapp.com/api/1.0/messages/send.json',
  data    : mandrill  // pass in data as strings
 })


.success(function (data) {

      $scope.success = true;
      $scope.formdata = {};
      $scope.hideContact = true;


})
.error(function (data) {
    $scope.error = true;
    $scope.hideContact = true;
});
};





});//end od controller
