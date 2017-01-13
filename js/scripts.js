$(document).ready(function() {
  $("form#survey").submit(function() {
    event.preventDefault();
    var first = $("#first").val();
    var second = $("#second").val();
    var third = $("#third").val();
    var fourth = $("#fourth").val();
    var fifth = $("#fifth").val();

      if (first === "front-end") {
        $(".css").show();
      } else if (first === "back-end") {
       $(".c").show();
     }
  });
});
