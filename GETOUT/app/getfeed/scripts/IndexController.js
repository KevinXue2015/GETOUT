angular
  .module('getfeed')
  .controller('IndexController', function($scope, supersonic) {

    $scope.updateCurrentEvent = function(ev){
      $scope.currentEvent = JSON.stringify(ev);
      var view = new supersonic.ui.View("getfeed#detailEvent");
      supersonic.ui.layers.push(view);
      supersonic.ui.view.reload()
    };

    $scope.testEvent1 = {
      name: "WhirlyBall",
      location: "1825 W Webster Ave, Chicago, IL 60614",
      time: "11 AM - 12 AM",
      eventType: "Activity",
      image: "http://www.whirlyball.com/wp-content/themes/whirlyball/img/logo.png",
      activityType: "Sports",
      desc: "You can play whirlyball, bowl, play tag & watch sports at this spot also with American grub & drink.",
      link: "http://www.whirlyball.com",
      source: "Google",
    }
    $scope.testEvent3 = {
      name: "Koi Fine Asian Cuisine & Lounge",
      location: "624 Davis Street Evanston, IL 60201",
      time: "from 6 p.m. to 7:30 p.m.",
      image: "http://www.koievanston.com/images/logo-Koi01.gif",
      eventType: "Food",
      foodType: "Asian",
      desc: "Koi is located in the right in the heart of charming Evanston’s restaurant row. Koi brings the bold flavors of the eight different regions of authentic Chinese Cuisine and fresh sushi to every dining experience. The new menu brings owner Sandy Chens’ love for traditional Chinese cooking to the forefront, while still offering the menu favorites that our regular customers have come to love.",
      link: "https://www.yelp.com/biz/koi-fine-asian-cuisine-and-lounge-evanston",
      source: "yelp",
    }
    $scope.testEvent2 = {
      name: "Holiday Tree Lighting",
      location: "First Northern Credit Union, 1705 Sherman Ave",
      time: "from 6 p.m. to 7:30 p.m.",
      eventType: "Holiday",
      image: "http://cityofevanston.org/_images/logo-cityofevanston.png",
      activityType: "Outdoors",
      desc: "Festivities will begin at 5 p.m. with music from the Evanston Children's Choir and appearances from surprise special guests. At 5:30 p.m., Mayor Elizabeth Tisdahl, Santa and Mrs. Claus will flip the switch and light the tree in Fountain Square. The event is free and open to all ages.",
      link: "http://www.cityofevanston.org/news/2015/11/celebrate-the-season-at-downtown-evanstons-holiday-tree-lighting-november-20/",
      source: "cityofevanston",

    }

    $scope.currentEvent = $scope.testEvent1;

    $scope.testEvents =[];
    $scope.testEvents.push($scope.testEvent1);
    $scope.testEvents.push($scope.testEvent2);
    $scope.testEvents.push($scope.testEvent3);
  });