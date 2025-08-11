const box1 = document.getElementById("name-required");
const box2 = document.getElementById("number-required");
const box3 = document.getElementById("email-required");
const box4 = document.getElementById("message-required");



function validatename() {
  var name = document.getElementById("name").value;
  if (name.length == 0) {
    box1.innerText = "name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]+(\s[A-Za-z]+)+$/)) {
    box1.innerText = "write full name";
    return false;
  }

  box1.innerHTML =
    '<i class="fa-sharp fa-regular fa-circle-check" style="color: #3d963c;"></i>';
  return true;
}



function validatenumber() {
  var number = document.getElementById("number").value;
  if (number.length == 0) {
    box2.innerText = "number is required";
    return false;
  }
  if (!number.match(/^[6-9][0-9]{9}$/)) {
    box2.innerText = " invalid, write 10 digit number";
    return false;
  }

  box2.innerHTML =
    '<i class="fa-sharp fa-regular fa-circle-check" style="color: #3d963c;"></i>';
  return true;
}



function validateemail() {
  var email = document.getElementById("email").value;
  if (email.length == 0) {
    box3.innerText = "email is required";
    return false;
  }
  if (!email.match(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)) {
    box3.innerText = "Enter a valid Gmail address";
    return false;
  }

  box3.innerHTML =
    '<i class="fa-sharp fa-regular fa-circle-check" style="color: #3d963c;"></i>';
  return true;
}



function validatemessage() {
  var message = document.getElementById("message").value;
  if (message.length == 0) {
    box4.innerText = "Feedback is required";
    return false;
  }
  if (message.length < 10) {
    box4.innerText = "Feedback must be at least 10 characters";
    return false;
  }

  box4.innerHTML =
    '<i class="fa-sharp fa-regular fa-circle-check" style="color: #3d963c;"></i>';
  return true;
}



document.querySelector("button").addEventListener("click", validatename);
document.querySelector("button").addEventListener("click", validatenumber);
document.querySelector("button").addEventListener("click", validateemail);
document.querySelector("button").addEventListener("click", validatemessage);
