//create an array of the cities


var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

console.log(cities)
console.log(cities.length);


//loop through cities

cities.forEach(function(city){

//create option element

	var option = `<option>${city}</option>`

//append element to select element

	$("#city-type").append(option);

});



// Use the $.attr() function to update html classes

var background = $("body").attr("background", "url(../images/citipix_skyline.jpg) no-repeat center center fixed;");

$("select").on("change", function(){
  // Get the value of user input using $.val()
	var selectedVal = $("select").val();

	console.log(selectedVal)

		$(cities).each(function(){

			// Use if/else if/else conditionals to control the flow of your application


			if (selectedVal === "NYC"){
				$("body").css("background", "url(images/nyc.jpg) no-repeat center center fixed");
			}else if (selectedVal === "SF"){
				$("body").css("background", "url(images/sf.jpg) no-repeat center center fixed");
			}else if (selectedVal === "LA"){
				$("body").css("background", "url(images/la.jpg) no-repeat center center fixed");
			}else if (selectedVal === "ATX"){
				$("body").css("background", "url(images/austin.jpg) no-repeat center center fixed");
			}else if (selectedVal === "SYD"){
				$("body").css("background", "url(images/sydney.jpg) no-repeat center center fixed");
			}


		});

});
	// Use the $.change event handler to capture user actions