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
      if (first === "front-end") {
        $ (".css").show();
      } else if (second === "web applications" || third === "start-up" && first === "back-end") {
       $(".ruby").show();
     } else if (second === "mobile apps" && first === "back-end") {
      $(".java").show();
    } else if (second === "games" && first === "back-end") {
      $(".python").show();
    } else if (second === "all") {
      $(".python" && ".c").show();
    } else if (first === "") {
       alert("Please answer all of the questions!");
     } else if (second === "") {
       alert("Please answer all of the questions!");
     } else if (third === "") {
       alert("Please answer all of the questions!");
     } else if (fourth === "") {
       alert("Please answer all of the questions!");
     } else if (fifth === "") {
       alert("Please answer all of the questions!");
     }

  });
});
