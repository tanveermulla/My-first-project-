if (!localStorage.getItem("isLoggedIn")) {
  window.location.href = "login.html";
}

let user = JSON.parse(localStorage.getItem("user"));
let container = document.getElementById("viewMode");

function showView() {
  container.innerHTML = `
    <p>Name: ${user.name}</p>
    <p>Age: ${user.age}</p>
    <p>Phone: ${user.phone}</p>
    <p>Email: ${user.email}</p>
    <p>Address: ${user.address}</p>
    <p>Pincode: ${user.pincode}</p>
  `;
}
showView();

function enableEdit() {
  container.innerHTML = `
    <input id="name" value="${user.name}">
    <input id="age" value="${user.age}">
    <input id="phone" value="${user.phone}">
    <textarea id="address">${user.address}</textarea>
    <button onclick="saveEdit()">Save</button>
  `;
}

function saveEdit() {
  user.name = document.getElementById("name").value;
  user.age = document.getElementById("age").value;
  user.phone = document.getElementById("phone").value;
  user.address = document.getElementById("address").value;

  localStorage.setItem("user", JSON.stringify(user));
  showView();
}

function logout() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "login.html";
}

function openModal() {
  document.getElementById("modal").style.display = "block";
}

function changePassword() {
  let p1 = document.getElementById("newPass").value;
  let p2 = document.getElementById("confirmPass").value;
  let check = document.getElementById("confirmCheck").checked;

  if (!check || p1 !== p2) return;

  user.password = p1;
  localStorage.setItem("user", JSON.stringify(user));
  document.getElementById("modal").style.display = "none";
}
