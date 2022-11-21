$(document).ready(function () {
  console.log("page ready");
  $("#login").on("click", function () {
    var email = $(".email").val();
    var password = $(".password").val();

    if (email == "" || password == "") alert("No fields can be blank");
    else {
      $.ajax({
        url: "./php/login.php",
        data: {
          login: 1,
          email: email,
          password: password,
        },

          success: function (response) {
            if (response == "success") {
              window.location = "profile.html";

            }
            else
              document.getElementById("error-msg").innerHTML = "*Incorrect email or Password";
        },
        dataType: "text",
      });
    }
  });
});
