//Frontend
$(document).ready(function(){

  $("#newGame").click(function(event) {

    createCards;

    debugger;

    $(".buyZone").show();
  });


  $("#buy-market").click(function(event) {
    buyMarket();
  });
});

//Backend

var countCellar = 10;
var countMoat = 10;
var countVillage = 10;
var countWoodcutter = 10;
var countWorkshop = 10;
var countMilitia = 10;
var countRemodel = 10;
var countSmithy = 10;
var countMarket = 10;
var countMine = 10;

function buyMarket() {
  if(countMarket > 0) {
    countMarket -= 1;
    shufflePile = shufflePile.concat(market.splice(0, 1));

  } else if (countMarket === 0) {
    // document.getElementById("buy-market").disabled = true;
    alert("This card has been bought out.");
  }
  $("#count-market").text(countMarket);
}

var createCards = function() {
  var allCards = [];
  var shufflePile = [];
  var coppers = [];
  var silvers = [];
  var golds = [];
  var estates = [];
  var ducheys = [];
  var provinces = [];
  var markets = [];

  for(i=0; i<10; i++) {
   var market = new Action("Market", 1, 1, 1, 1, 5);
   markets.push(market);
  }

  for(i=0; i<40; i++) {
   var copper = new Money("Copper",1,0,);
   coppers.push(copper);
  }

  allCards = allCards.push(coppers);
  for(i=0; i<26; i++) {
   var silver = new Money("Silver",2,3);
   silvers.push(silver);
  }

  for(i=0; i<20; i++) {
   var gold = new Money("Gold",3,6);
   golds.push(gold);
  }

  for(i=0; i<24; i++) {
   var estate = new VictoryPoint("Estate",1,3,);
   estates.push(estate);
  }

  for(i=0; i<26; i++) {
   var duchey = new VictoryPoint("Duchey",3,6);
   ducheys.push(duchey);
  }

  for(i=0; i<20; i++) {
   var province = new VictoryPoint("Province",6,10);
   provinces.push(province);
  }

  allCards = [coppers,silvers,golds,estates,ducheys,provinces,markets];



   var createDeck = function() {
    var playerOneMoney = allCards[0].splice(0, 7);
    var shufflePile = playerOneMoney.concat(allCards[3].splice(0, 3));
    debugger;
    return shufflePile;
  }
  return createDeck;
  debugger;
}

//   function shuffler(shufflePile) {
//     debugger;
//     var j, x, i;
//     for (i = shufflePile.length; i; i--) {
//         j = Math.floor(Math.random() * i);
//         x = shufflePile[i - 1];
//         shufflePile[i - 1] = shufflePile[j];
//         shufflePile[j] = x;
//     }
//     debugger;
//     return drawHand(shufflePile);
//   }
// }
//
//
//   function drawHand(shufflePile) {
//     var deck = shufflePile;
//     shufflePile = [];
//     var moneyInHand = 0;
//     var actions = 0;
//     var buys = 0;
//     var playerHand = deck.splice(0,5);
//     for(i=0 ; i<playerHand.length ; i++) {
//       if(playerHand[i].name === "Copper" || playerHand[i].name === "Silver" || playerHand[i].name === "Gold") {
//       moneyInHand += playerHand[i].value;
//       }
//     }
//     actions += 1;
//     buys += 1;
//     debugger;
//   }
//
//
//   function actionSmithy() {
//     playerHand = playerHand.concat(deck.splice(0,3));
//     actions -= 1;
//   }
//   function actionMarket() {
//     playerHand = playerHand.concat(deck.splice(0,1));
//     buys += 1;
//     moneyInHand += 1;
//     debugger
//   }




function Money (name, value, cost, count) {
   this.name = name;
   this.value = value;
   this.cost = cost;
   this.count = count;
 }

 function VictoryPoint (name, value, cost) {
   this.name = name;
   this.value = value;
   this.cost = cost;
 }

 function Action (name, actionsGranted, cardsGranted, buysGranted, moneyGranted, cost) {
   this.name = name;
   this.actionsGranted = actionsGranted;
   this.cardsGranted = cardsGranted;
   this.buysGranted = buysGranted;
   this.moneyGranted = moneyGranted;
   this.cost = cost;
 }
