//get manufacturers
$("#getManufacturers").click(function(){
	page.manufacturers();
});
//get cars
$("#getCars").click(function(){
  page.cars();
});
//get cars
$("#getManufacturerNames").click(function(){
	page.manufacturerNames();
});
//create new car
$("#addCar").click(function(){
  page.addCar();
});

//create new Manufacturer
$("#addManufacturer").click(function(){
  page.addManufacturer();
});
//get manufacturer
$("#main-content").on('click',".getManufacturer",function(){
  manName = $(this).data("manufacturer");
  document.cookie = "name=" + manName;
  $.get("manufacturer", function( cars ){
        if(cars.length < 1)
          manView = '<h1>We can\'t find cars to the '+ manName + ' manufacturer';
        else
          manView = '<h1 class="title">'+ manName +' Cars</h1>';
        i=0;
        while( car = cars[i++]) {
          manView += render.car(car);
        }

    $( "#main-content" ).html(manView);
  });
});
$(document).ready(function(){
	page.manufacturers();
});
$()
function postNewCar(e) {
	e.preventDefault();
	newCar = $( e.target ).serializeArray();
	$.post( $( e.target ).attr('action') , newCar)
	.done(function(){
		page.cars();
	});
}
function postNewManufacturer(e) {
	e.preventDefault();
	newCar = $( e.target ).serializeArray();
	$.post( $( e.target ).attr('action'), newCar)
	.done(function(){
		page.manufacturers();	
	});
}