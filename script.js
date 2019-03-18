
$(".electricspark").hide();
$(".electricspark2").hide();
$(".popcorn").hide();
$(".fire").hide();
$(".finn").hide();

$(".bluebutton2").click(function() {
$(".electricspark").slideDown(); 
$(".corn").toggle(); 
$(".electricspark").slideUp();
$(".popcorn").toggle();
});

$(".redbutton").click(function() {
$(".electricspark2").slideDown();
$(".pit").slideToggle();
$(".electricspark2").slideUp();
$(".fire").slideToggle();
});

$(".goldbutton").click(function() {
$(".boo").fadeToggle();
});

$(".wizard").click(function() {
$(".wizard").hide();
$(".finn").show();
});
