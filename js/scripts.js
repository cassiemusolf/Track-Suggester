$(document).ready(function() {
  $("form#survey").submit(function() {
    event.preventDefault();
    var first = $("#first").val();
    var second = $("#second").val();
    var third = $("#third").val();
    var fourth = $("#fourth").val();
    var fifth = $("#fifth").val();
    var nameInput = $("input#name").val();

    $(".name").text(nameInput);

  if (first === "") {
       alert("Please answer all of the questions!");
     } else if (second === "") {
       alert("Please answer all of the questions!");
     } else if (third === "") {
       alert("Please answer all of the questions!");
     } else if (fourth === "") {
       alert("Please answer all of the questions!");
     } else if (fifth === "") {
       alert("Please answer all of the questions!");
     } else if (first === "front-end") {
        $ (".css").show();
     } else if (first === "back-end" && second === "web applications") {
       $(".ruby").show();
     } else if (first === "back-end" && second === "mobile apps") {
      $(".java").show();
    } else if ( first === "back-end" && second === "games") {
      $(".python").show();
    } else if (first === "back-end" && second === "all") {
      $(".c").show();
    }
  });
});
