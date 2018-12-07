var render = {
	car: function(car) {
	 return '<div class="car item">' +
			'<header>' + car.name + '</header>' +
			'<div class="container">' +
			  '<div><span>Consumption: </span>' + car.consumption  + '</div>' +
			  '<div><span>Color: </span>'+ car.color  + '</div>' +
			  '<div><span>Manufacturer: </span>'+ car.manufacturer  + '</div>' +
			  '<div><span>Available: </span>'+ car.available  + '</div>' +
			  '<div><span>Year: </span>' + car.year  + '</div>' +
			  '<div><span>Horsepower: </span>' + car.horsepower  + '</div>' +
			"</div>"+
		  "</div>";
	}
}
//pages
var page = {
	manufacturers: function() {
		$('.menu-item.active').removeClass('active');
		$('#getManufacturers').parent().addClass('active');
		$.get( "manufacturers", function( manufacturers ) {
			manView = '<h1 class="title">Manufacturers</h1>';
			if(manufacturers.length <1)
			  manView =+ '<h1>We can\'t find manufacturers</h1>';
			i=0;
			while( manufacturer = manufacturers[i++])
			  manView +=
			  '<div class="manufacturer item">' +
				'<header>' + manufacturer.name + '</header>' +
				'<div class="container">' +
				  '<div><span>Name: </span>' + manufacturer.country  + '</div>' +
				  '<div><span>Founded: </span>' + manufacturer.founded  + '</div>' +
				"</div>" +
			  "</div>";
			$( "#main-content" ).html(manView);
		  });
	},
	cars: function() {
		$('.menu-item.active').removeClass('active');
		$('#getCars').parent().addClass('active');
		$.get( "cars", function( cars ) {
			manView = '<h1 class="title">Cars</h1>';
			if(cars.length <1)
			  manView =+ '<h1>We can\'t find cars</h1>';
			i=0;
			while( car = cars[i++]) {
			  manView += render.car(car);
			 
			}
			$( "#main-content" ).html(manView);
		});
	},
	manufacturerNames: function() {
	$('.menu-item.active').removeClass('active');
		$('#getManufacturerNames').parent().addClass('active');
		$.get( "manufacturerNames", function( manufacturerNames ) {
			manView = '<h1 class="title">Manufacturer Names</h1><ul class="car-manufacturers item-list">';
			i=0;
			while( manufacturerName = manufacturerNames[i++]) {
			manView += '<li><a class="getManufacturer" data-manufacturer="' + manufacturerName + '">' + manufacturerName + '</a></li>';
			}
			manView +='</ul>';
			$( "#main-content" ).html(manView);
		});
	},
	addCar: function() {
		$('.menu-item.active').removeClass('active');
		  $('#addCar').parent().addClass('active');
		  var manufacturerNames = ["Opel","Toyota","KIA","Skoda","Ford","Tesla","Chevrolet","Sungri Motor Plant"];
		  manView =
		  '<h1 class="title text-center">Create Car</h1>' +
		  '<form method="POST" onsubmit="postNewCar(event)" action="addCar" class="send-form">' +
			'<div class="form-item">'+
			  '<label for="car-name">Name:</label>' +
			  '<input id="car-name" name="name" required>' +
			'</div>' +
			'<div class="form-item">' +
			  '<label for="car-consumption">Consumption:</label>' +
			  '<input id="car-consumption" name="consumption" required>' +
			'</div>' +
			'<div class="form-item">' +
			  '<label for="car-color">Color:</label>' +
			  '<input id="car-color" name="color" required>' +
			'</div>' +
			'<div class="form-item">' +
			  '<label for="car-manufacturer">Manufacturer:</label>' +
			  '<select name="manufacturer" required>';

			  //generate manufacturer options
			  i=0;
			  while(manufacturerName = manufacturerNames[i++])
				manView += '<option value="' + manufacturerName + '">' + manufacturerName + '</option>';

			manView +=
			  '</select>'+
			'</div>' +
			'<div class="form-item">' +
			  '<label for="car-available">Available:</label>' +
			  '<input id="car-available" type="number" name="available" required>' +
			'</div>' +
			'<div class="form-item">' +
			  '<label for="car-year">Year:</label>' +
			  '<input id="car-year" type="number" min="1900" max="2300" name="year" required>' +
			'</div>' +
			'<div class="form-item">' +
			  '<label for="car-horsepower">Horsepower:</label>' +
			  '<input id="car-horsepower" name="horsepower" required>' +
			'</div>' +
			'<div class="form-item text-right">' +
			  '<input type="submit" value="Send">' +
			'</div>' +
		  "</form>";
		  $( "#main-content" ).html(manView);
	},
	addManufacturer: function() {
		$('.menu-item.active').removeClass('active');
		$('#addManufacturer').parent().addClass('active');
	  manView =
	  '<h1 class="title text-center">Create Manufacturer</h1>' +
	  '<form method="POST" onsubmit="postNewManufacturer(event)" action="addManufacturers" class="send-form">' +
		'<div class="form-item">'+
		  '<label for="manufacturer-name">Name:</label>' +
		  '<input id="manufacturer-name" name="name" required>' +
		'</div>' +

		'<div class="form-item">' +
		  '<label for="manufacturer-founded">Founded:</label>' +
		  '<input id="manufacturer-founded" name="founded" required>' +
		'</div>' +

		'<div class="form-item">' +
		  '<label for="manufacturer-country">Country:</label>' +
		  '<input id="manufacturer-country" name="country" required>' +
		'</div>' +

		'<div class="form-item text-right">' +
		  '<input type="submit" value="Send">' +
		'</div>' +
	  "</form>";
	  $( "#main-content" ).html(manView);
	}
	
}