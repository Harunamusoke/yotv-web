$(document).ready(function () {
  const userNumber = $(".user_number");

  $(function () {
    $("body").niceScroll({
      cursorcolor: "#643685",
      cursorwidth: "10px",
    });
  });

  $(function () {
    $("#channel-container").niceScroll({ cursorcolor: "#643685" });
  });

  //cookie
  var getCookie = function (cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };
  //check cookie
  (function checkCookie() {
    let user = getCookie("user_number");
    if (user != "") {
      userNumber.text(user);
    }
  })();
});
