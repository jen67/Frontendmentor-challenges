// THis javascript is responsible for the change of the stick navbar during scrolling
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
  const menuToggle = document.querySelector(".menuToggle");
  const navigation = document.querySelector(".navigation");
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}

function validateForm() {
  var fullname = document.forms["myForm"]["usrnm"].value;
  var email = document.forms["myForm"]["email"].value;
  var password = document.forms["myForm"]["psw"].value;
  var phone = document.forms["myForm"]["phone"].value;
  var gender = document.forms["myForm"]["gender"].value;

  if (
    fullname == "" ||
    email == "" ||
    password == "" ||
    phone == "" ||
    gender == ""
  ) {
    alert("Please fill out all required fields.");
    return false;
  }

  // Validate email format
  var emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Validate password length
  if (password.length < 4) {
    alert("Password must be at least 4 characters long.");
    return false;
  }

  // Validate phone number format
var phoneRegex = /^[0-9+()-]*$/;
if (!phoneRegex.test(phone)) {
  alert("Please enter a valid phone number. Only numbers and symbols (+, -, ()) are allowed.");
  return false;
}
  if (
    fullname != "" &&
    emailRegex.test(email) &&
    password.length >= 4 &&
    phoneRegex.test(phone) &&
    gender != ""
  ) {
    alert("Submission successful!");
    return true;
    form.reset();
  }
}
