function Ticket(movie, time, age){
  this.movie = movie;
  this.time = time;
  this.age = age;
}
function calculatePrice(age, time){
  var price = 10;
  if ( time < 2 ) {
    if (age > 60 ) {
      price -= 4;
    }
  }
  else {
    if ( time >= 2 ) {
      if ( age > 60 ) {
        price -= 2;
      }
    }
  };
  return price ;
}; // END FUNCTION CALCPRICE




$(document).ready(function(){
  $("#movieForm").submit(function(event){
    event.preventDefault();

    var movie = $("#movie").val();
    var time = $("#time").val();
    var age = parseInt($("#age").val());

     var newTicket = new Ticket(movie, time, age)

      console.log(calculatePrice(newTicket.age, newTicket.time));

     console.log(newTicket)
     console.log("movie ", newTicket.movie);


  })
})
