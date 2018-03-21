// $(document).ready(function() {
//   $("#loader loader-double").each(function() {
//     animationHover(this, "fadeOut");
//   });
// });

$(document).ready(function() {
  $(function() {
    var player = 1;
    var table = $("table");
    var message = $(".message");
    var turn = $(".turn");
    displayNextPlayer(turn, player);

    $("td").click(function() {
      td = $(this);
      var state = getState(td);
      if (!state) {
        var pattern = definePatternForCurrentPlayer(player);
        changeState(td, pattern);
        if (checkIfPlayerWon(table, pattern)) {
          window.alert(
            "Player " + player + " has wins! DONUTS for everyone..."
          );
          // message.html('Player '+player+' has won.');
          turn.html("");
        } else {
          player = setNextPlayer(player);
          displayNextPlayer(turn, player);
        }
      } else {
        window.alert("Duh! This box is already checked.");
        // message.html('This box is already checked.');
      }
    });

    $(".reset").click(function() {
      player = 1;
      message.html("");
      reset(table);
      displayNextPlayer(turn, player);
    });
  });

  function getState(td) {
    if (td.hasClass("cross") || td.hasClass("circle")) {
      return 1;
    } else {
      return 0;
    }
  }

  function changeState(td, pattern) {
    return td.addClass(pattern);
  }

  function definePatternForCurrentPlayer(player) {
    if (player === 1) {
      return "cross";
    } else {
      return "circle";
    }
  }

  function setNextPlayer(player) {
    if (player === 1) {
      return (player = 2);
    } else {
      return (player = 1);
    }
  }

  function displayNextPlayer(turn, player) {
    turn.html("It's your turn, player: " + player);
  }

  function checkIfPlayerWon(table, pattern) {
    var won = 0;
    if (
      table.find(".item1").hasClass(pattern) &&
      table.find(".item2").hasClass(pattern) &&
      table.find(".item3").hasClass(pattern)
    ) {
      won = 1;
    } else if (
      table.find(".item1").hasClass(pattern) &&
      table.find(".item4").hasClass(pattern) &&
      table.find(".item7").hasClass(pattern)
    ) {
      won = 1;
    } else if (
      table.find(".item1").hasClass(pattern) &&
      table.find(".item5").hasClass(pattern) &&
      table.find(".item9").hasClass(pattern)
    ) {
      won = 1;
    } else if (
      table.find(".item4").hasClass(pattern) &&
      table.find(".item5").hasClass(pattern) &&
      table.find(".item6").hasClass(pattern)
    ) {
      won = 1;
    } else if (
      table.find(".item7").hasClass(pattern) &&
      table.find(".item8").hasClass(pattern) &&
      table.find(".item9").hasClass(pattern)
    ) {
      won = 1;
    } else if (
      table.find(".item2").hasClass(pattern) &&
      table.find(".item5").hasClass(pattern) &&
      table.find(".item8").hasClass(pattern)
    ) {
      won = 1;
    } else if (
      table.find(".item3").hasClass(pattern) &&
      table.find(".item6").hasClass(pattern) &&
      table.find(".item9").hasClass(pattern)
    ) {
      won = 1;
    } else if (
      table.find(".item3").hasClass(pattern) &&
      table.find(".item5").hasClass(pattern) &&
      table.find(".item7").hasClass(pattern)
    ) {
      won = 1;
    }
    return won;
  }

  function reset(table) {
    console.log("jkhfjhf");
    table.find("td").each(function() {
      $(this).removeClass("cross").removeClass("circle");
    });
  }
});

var h1 = setInterval("doSomething()", 5000);

$('.first').addClass('animated fadeInUp');

setTimeout(function () {
    $('.first').show().addClass('animated fadeInUp');}, 1500
);
