// Fonction toggle desktop pour Share Box

$(document).ready(function() {
    $(".share").click(function() {
      $(".share-box").toggleClass("d-flex");
      $(".icon-container").toggleClass("active");
    })
});


