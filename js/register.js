$(window).ready(function () {
  $("#register").on("click", function () {
    console.log("register clicked");
    var fname = $("#firstName").val();
    var lname = $("#lastName").val();
    var fullname = fname + " " + lname;
    var email = $("#email").val();
    var password = $("#password").val();
    var password2 = $("#password2").val();
    var gender = "";
    var genders = document.getElementsByName("inlineRadioOptions");
    for (i = 0; i < genders.length; i++) {
      if (genders[i].checked) gender = genders[i].value;
    }

    var phone = $("#phone").val();
    var DOB = $("#birthday").val();
    console.log("hi" + email);
    console.log(DOB);

    if (
      email == "" ||
      password == "" ||
      fname == "" ||
      lname == "" ||
      password2 == "" ||
      DOB == "" ||
      gender == "" ||
      phone == ""
    ) {
      document.getElementById("fail-response").innerText =
        "*No Fields can be blank .";
    } else if (password.length < 8) {
      document.getElementById("fail-response").innerText =
        "*Password is too short .";
    } else if (phone.length > 10) {
      document.getElementById("fail-response").innerText =
        "*Do not use country code for Phone Number .";
    } else if (password != password2) {
      document.getElementById("fail-response").innerText =
        "*Passwords do not match .";
      console.log(password);
      console.log(password2);
    } else {
      console.log("ajax called to post data");

      document.getElementById("fail-response").innerText = "";
      $.ajax({
        url: "./php/register.php",

        data: {
          Login: 1,
          Name: fullname,
          Phone: phone,
          Email: email,
          DOB: DOB,
          Gender: gender,
          Password: password,
        },

        success: function (response) {
          if (response == "success") {
            console.log(response);
            document.getElementById("success-response").innerText =
              "*Registration is successful! Login to continue .";
          } else {
            console.log(response+"at fail");
            document.getElementById("fail-response").innerText =
              "*Registration failed . Try Again.";
          }
        },
        dataType: "text",
      });
    }
  });
});
