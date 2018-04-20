$( "#target" ).submit(function( event ) {
  alert( "Handler for .submit() called." );
  console.log("#target");
  event.preventDefault();

});

$( "#other" ).click(function() {
  $( "#target" ).submit();
});
