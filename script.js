// Send Email Function

function sendEmail() {
  var name = document.getElementById("contact-name").value;
  var email = document.getElementById("contact-email").value;
  var msg = document.getElementById("contact-message").value;

  if (name == "") {
    alert("Enter name");
    return false;
  }

  if (email == "") {
    alert("Enter email");
    return false;
  }

  if (msg == "") {
    alert("Enter Message");
    return false;
  } else {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "antoniocaraballo48@gmail.com",
      Password: "asrvjquapwwilxaq",
      To: "antoniocaraballo48@gmail.com",
      From: "antoniocaraballo48@gmail.com",
      Subject:
        document.getElementById("contact-name").value + " sent you a message",
      Body:
        document.getElementById("contact-email").value +
        "<br><br>" +
        document.getElementById("contact-message").value,
    }).then(function (message) {
      alert("THANK YOU!");
    });
  }
}
