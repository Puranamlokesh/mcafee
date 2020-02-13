$("#formSubmit").submit(function(e) {
  e.preventDefault();
  console.log(formvalidation());
  // if (formvalidation() != false) {
  var form = $(this).serialize();
  var url = "https://reqres.in/api/users";
  var formValidation;
  $("input[type='text']").each(function() {
    //var filter = /^[w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
    var email = $(this).val();
    if ($(this).val() == "") {
      $(this)
        .parent()
        .addClass("inValid");
      $(".valid-errors, #email-req").show();
      formValidation = false;
    } else {
      $("#email-req").hide();
    }

    if (/(.+)@(.+){2,}\.(.+){2,}/.test(email)) {
      $("#email-val").hide();
    } else {
      $(this)
        .parent()
        .addClass("inValid");
      $(".valid-errors, #email-val").show();
      formValidation = false;
    }
  });
  $("input[type='password']").each(function() {
    if ($(this).val() == "") {
      $(this)
        .parent()
        .addClass("inValid");
      $(".valid-errors #password-req").show();
      formValidation = false;
    } else {
      $("#password-req").hide();
    }
    if ($(this).val().length < 6) {
      $(this)
        .parent()
        .addClass("inValid");
      $(".valid-errors #password-val").show();
      formValidation = false;
    } else {
      $("#password-val").hide();
    }
    //return formValidation;
  });
  console.log("formValidation==", formValidation);
  if (formValidation != false) {
    $.ajax({
      type: "POST",
      url: url,
      data: form,
      success: function(response) {
        alert(JSON.stringify(response, null, 4));
      }
    });
  }
});

function formvalidation() {
  var email = document.forms["RegForm"]["user_email"];
  var pwd = document.forms["RegForm"]["user_password"];
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  //   if (email.value == "") {
  //     document.getElementById("errors").innerHTML = "Please enter your email";
  //     email.focus();
  //     return false;
  //   }

  //   if (pwd.value == "") {
  //     document.getElementById("errors").innerHTML = "Please enter your password";
  //     pwd.focus();
  //     return false;
  //   }
  //   if (email.value != "" && pwd.value != "") {
  //     return true;
  //   }
}
