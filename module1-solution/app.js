(function(){
  'use strict';

  angular.module("LunchCheck",[])

  .controller("LunchCheckController",LunchCheckController)
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.text="";
    $scope.message="";
    $scope.textboxColor="";
    $scope.messageColor="";
    $scope.separateItems=function(){
        separateItems($scope.text);
    }

    function separateItems(text){
      if(text.length==0){
        $scope.textboxColor="textbox_red";
        $scope.messageColor="message_red";
        $scope.message="Please enter data first!";
        return;
      }
      var items=text.split(",");
      var cleanItems=new Array();
      for(var i=0;i<items.length;i++){
        if(items[i].trim().length>0){
          cleanItems.push(items[i]);
        }
      }
      if(cleanItems.length<=3){
        $scope.textboxColor="textbox_green";
        $scope.messageColor="message_green";
        $scope.message="Enjoy!";
      }
      else{
        $scope.textboxColor="textbox_green";
        $scope.messageColor="message_green";
        $scope.message="Too much!";
      }
    }

  }

})();
