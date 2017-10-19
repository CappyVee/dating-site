$(document).ready(function(){
  $("#date-form").submit(function(event){
    event.preventDefault();
    var name = $("input#name").val();
    var gender = $("input#gender").val().toLowerCase();
    var age = parseInt($("input#age").val());
    if (age >= 30 && gender === "female") {
      $(".localmatches").show();
      $(".profile-img").attr("src", "img/attila.jpg");
      $(".profile-title").text("Attila the Hun");
      $(".profile-text").text("Attila the Hun is a really great guy");
    } else if ((18 <= age && age < 30) && gender === "female") {
      $(".localmatches").show();
      $(".profile-img").attr("src", "img/achilles.jpg");
      $(".profile-title").text("Achilles the Slayer");
      $(".profile-text").text("Achilles is lonely and so are you");
    } else if ((18 <= age && age < 33) && gender === "male") {
      $(".localmatches").show();
      $(".profile-img").attr("src", "img/athena.jpg");
      $(".profile-title").text("Athena the Hunter");
      $(".profile-text").text("Athena will stab you");
    } else if (age >= 33 && gender === "male") {
      $(".localmatches").show();
      $(".profile-img").attr("src", "img/elizabethbathory.png");
      $(".profile-title").text("Elizabeth the Ruler");
      $(".profile-text").text("Avoid taking baths with her");
    } else if (age < 18) {
      alert("GET OUT OR WE'LL KILL YOU");
    } else {
      alert("Fill the form");
    }
  });//Submit ends

});//end doc ready function

$(".profile-img").attr("src", "img/elizabethbathory.png")
$(".profile-img").attr("src", "img/athena.jpg")
$(".profile-img").attr("src", "img/achilles.jpg")
