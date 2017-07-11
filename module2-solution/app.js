(function(){
  'use strict';

  angular.module("ShoppingListCheckOff",[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService)

  ToBuyController.$inject=['ShoppingListCheckOffService']
  function ToBuyController(ShoppingListCheckOffService){
    var toBuy=this;
    toBuy.list=ShoppingListCheckOffService.getBuyList();

    toBuy.bought=function(itemIndex){
      ShoppingListCheckOffService.bought(itemIndex);
    }

  }

  AlreadyBoughtController.$inject=['ShoppingListCheckOffService']
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var toBought=this;
    toBought.list=ShoppingListCheckOffService.getBoughtList();
  }

  function ShoppingListCheckOffService(){
    var service=this;

    var buyList=[
      { name: "cookies", quantity: 10 },
      { name: "chips", quantity: 5 },
      { name: "apple juice", quantity: 7 },
      { name: "sugar lemon", quantity: 3 },
      { name: "ice cream", quantity: 8 }
    ];

    var boughtList=[];

    service.getBuyList=function(){
      return buyList;
    }

    service.getBoughtList=function(){
      return boughtList;
    }

    service.bought=function(itemIndex){
      var boughtItem=buyList[itemIndex];
      buyList.splice(itemIndex, 1);
      boughtList.push(boughtItem);
    }

  }

})();
