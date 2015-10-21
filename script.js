var apple = {};
var orange = {};
var banana = {};
var pear = {};
var fruitArray = [apple, orange, banana, pear];

$(document).ready(function(){

apple.name = "Apple";
orange.name = "Orange";
banana.name = "Banana";
pear.name = "Pear";

// for (var i=0; i<fruitArray.length; i++){
	
// }

// apple.marketPrice = 0.51;
// orange.marketPrice = 9.98;

for (var i=0; i<fruitArray.length; i++){
	fruitArray[i].marketPrice = originalMarketPrice(0.50, 9.99);
	//$('#priceChange').append("<p id='" + i +"'>$" + fruitArray[i].marketPrice + "</p>");
}

priceChange();

console.log(fruitArray);

});

function originalMarketPrice(min, max) {
	return ((Math.random() * (max - min)) + min).toFixed(2);
}

function randomNumber() {

$('#priceChange').empty();
	for (var i=0; i<fruitArray.length; i++){
		
		var change = Math.random() - 0.5;
		var temp = Number(fruitArray[i].marketPrice) + change;

		//console.log("this is temp: ", temp, "this is change: ", change, "this is mktprice", fruitArray[i].marketPrice);
		
			if (temp >= 0.50 && temp <= 9.99){
				fruitArray[i].marketPrice = temp;
				$('#priceChange').append("<p id='" + i +"'>" + fruitArray[i].name + "<br>$" + fruitArray[i].marketPrice.toFixed(2) + "</p>");
				//$('#fruitNames').append("<p>" + fruitArray[i].name + "</p>");

				//$('#'+ i).replaceWith("<p id='" + i +"'>" + fruitArray[i].marketPrice + "</p>");
			} 
				else if (temp < 0.50) {
					fruitArray[i].marketPrice = temp + Math.abs(change*2);
					//console.log("this is less than range", fruitArray[i].marketPrice, temp, Math.abs(change) * 2);
					$('#priceChange').append("<p id='" + i +"'>" + fruitArray[i].name + "<br>$" + fruitArray[i].marketPrice.toFixed(2) + "</p>");
					console.log("this is below");
			}
				else if (temp > 9.99) {
					fruitArray[i].marketPrice = temp - Math.abs(change*2);
					$('#priceChange').append("<p id='" + i +"'>" + fruitArray[i].name + "<br>$" + fruitArray[i].marketPrice.toFixed(2) + "</p>");
					console.log("this is above");
			}
		


	//apple.marketPrice = parseInt(apple.marketPrice) + change; 
	//$('#changeNum').replaceWith("<p id='changeNum'>" + apple.marketPrice + "</p>");
	}	
	//return fruitArra.marketPrice;
}

function priceChange() {
	setInterval(function(){randomNumber();}, 1000);


	//fruitArray[i].prevMarketPrice = fruitArray[i].marketPrice;
	//fruitArray[i].marketPrice = fruitArray[i].marketPrice + fluctuation;
}

function appendDom(){

}



//averagePurchasedPrice = (fruitArray[i].prevMarketPrice + fruitArray[i].marketPrice) / (fruitArray[i].quantity + 1);

