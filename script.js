var apple = {};
var orange = {};
var fruitArray = [apple, orange];

$(document).ready(function(){

for (var i=0; i<fruitArray.length; i++){
	fruitArray[i].marketPrice = originalMarketPrice(0.5, 9.99);
}

priceChange();

console.log(fruitArray);

});

function originalMarketPrice(min, max) {
	return ((Math.random() * (max - min)) + min).toFixed(2);
}

function randomNumber() {
	//var change = Math.random() - 0.5;
	//console.log(change);

	for (var i=0; i<fruitArray.length; i++){
		
		//fruitArray[i].marketPrice = parseInt(fruitArray[i].marketPrice) + (Math.random() - 0.5); 
		var temp = parseInt(fruitArray[i].marketPrice) + (Math.random() - 0.5);
		console.log("This is math.random: ", (Math.random() - 0.5));

			if (temp >= 0.50 && temp <= 9.99){
				fruitArray[i].marketPrice = temp;
				$('#'+ i).replaceWith("<p id='" + i +"'>" + fruitArray[i].marketPrice + "</p>");
			} 
				else if (temp < 0.50) {
				fruitArray[i].marketPrice = fruitArray[i].marketPrice + Math.abs(Math.random() - 0.5);
				console.log("This is Math.abs: ", Math.abs(Math.random() - 0.5));
				$('#'+ i).replaceWith("<p id='" + i +"'>" + fruitArray[i].marketPrice + "</p>");
			}
			//console.log(fruitArray[i].marketPrice);
			// 	else if (fruitArray[i].marketPrice > 9.99) {
			// 	fruitArray[i].marketPrice = parseInt(fruitArray[i].marketPrice) - Math.abs(Math.random() - 0.5);
			// 	$('#'+ i).replaceWith("<p id='" + i +"'>" + fruitArray[i].marketPrice + "</p>");
			// }
		


	//apple.marketPrice = parseInt(apple.marketPrice) + change; 
	//$('#changeNum').replaceWith("<p id='changeNum'>" + apple.marketPrice + "</p>");
	}	
	//return fruitArra.marketPrice;
}

function priceChange() {
	setInterval(function(){ fluctuation = randomNumber().toFixed(2);}, 5000);


	//fruitArray[i].prevMarketPrice = fruitArray[i].marketPrice;
	//fruitArray[i].marketPrice = fruitArray[i].marketPrice + fluctuation;
}

function appendDom(){

}



//averagePurchasedPrice = (fruitArray[i].prevMarketPrice + fruitArray[i].marketPrice) / (fruitArray[i].quantity + 1);

