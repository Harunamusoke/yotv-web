$(document).ready(function () {
  const apiUrl = "https://randomuser.me/api/";
  const userNumber = $("#user_number");
  const userInput = $("#number-input");
  const userForm = $("#formInput");
  const alertModal = $("#alertModal");
  const output = $("#output");
  const select = $("#payment");

  userForm.submit(function (e) {
    e.preventDefault();
    const value = userInput.val().trim();

    if (!value) return;
    else if (value.search("[^0-9]") >= 0) {
      alertModal.modal("show");
      setTimeout(() => {
        alertModal.modal("hide");
      }, 2000);

      const valueSet = value.match(/\d+/g).reduce((a, b) => a + "" + b); //.map((a) => a + "");
      userInput.val(valueSet);
      // console.log(valueSet);
      // userInput.val(value.replace(/^\D+/g, ""));
      return;
    }
    if (value.length < 10) return;

    userInput.val("");
    const apiUrlCont = apiUrl + value;

    if (select.hasClass("d-none")) {
      // send raw request without paymnet
    } else {
      // send request with paymnet
    }

    console.log(apiUrlCont);
    requestFunc();
  });

  function requestFunc(url = "") {
    $.ajax({
      type: "GET",
      url: apiUrl,
      dataType: "json",
      success: function (response) {
        console.log(response);
        setCookie("user_number", response.results[0].phone);
        userNumber.text(response.results[0].phone);
      },
      error: function (response) {
        console.log(response);
        output.append($("p.text-danger").text("Error"));
      },
    });
  }

  // set cookie
  var setCookie = function (name, value, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  };

  // get cookie
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
      userInput.val(user);
    }
  })();
});
