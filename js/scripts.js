function Ticket(movie, time, age){
  this.movie = movie;
  this.time = time;
  this.age = age;
}



$(document).ready(function(){
  $("#movieForm").submit(function(event){
    event.preventDefault();

    var movie = $("#movie1").val();
    var time = $("#time").val();
    var age = parseInt($("#age").val());

     var newTicket = new Ticket(movie, time, age)

     console.log(newTicket)




  })
})
