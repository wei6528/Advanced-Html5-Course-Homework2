(function (){ //匿名函數 - 因程式有生命週期,節省儲存空間
  
  var app = angular.module('store',[]); // []處為"相依性注入",引用已經寫好的module EX.繼承 intraBasePage

  //每一個小事件都是一個Controller
  //[超級重要]Controller的命名一定要用駝峰命名法~第一個字母一定要小寫
  app.controller('storeController',function(){
    var store = this;
    this.products = product;
  });

  app.controller('panelController',function(){
    
    this.tab = 1;
    this.selectTab = function(tabNumber){
      this.tab = tabNumber;
    };
    
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });
  
  app.controller('reviewController',function(){
    this.review = {}; //開一個空的陣列去存值

    this.addReview = function(product){
      product.reviews.push(this.review); //將新增的評論加進該product的reviews的最後
      this.review = {}; //清空review也會同時清空表單
    }
  });

  var product = 
  [
    {
      name : 'iPhone 6s',
      price : 32900,
      description : '大螢幕,3D touch',
      canBuy:false,
      soldOut:true,
      image:[
      	{
      		url: 'http://dl.stickershop.line.naver.jp/products/0/0/1/1158267/android/stickers/6447373_key.png',
      		description:'0'
      	},
      	{
      		url:'http://dl.stickershop.line.naver.jp/products/0/0/1/1158267/android/stickers/6447364_key.png',
      		description:'1'
      	}
      ],
      reviews :[
          {
              stars :5,
              body:"this is first Review.",
              author:"joe@thomas.com"
          },
          {
              stars:4,
              body:"two Review",
              author:"wei@hater.com"
          }
      ]
    },
    {
      name : 'iPhone 5s',
      price : 21900,
      description : '大螢幕,touch',
      canBuy:true,
      soldOut:false,
      image:[
      	{
      		url: 'http://dl.stickershop.line.naver.jp/products/0/0/1/1158267/android/stickers/6447378_key.png',
      		description:'3'
      	},
      	{
      		url:'http://dl.stickershop.line.naver.jp/products/0/0/1/1158267/android/stickers/6447360_key.png',
      		description:'4'
      	}
      ]
    }    
  ];
  
})();