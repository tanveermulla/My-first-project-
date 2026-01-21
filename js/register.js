function register() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;
  let pincode = document.getElementById("pincode").value;
  let password = document.getElementById("password").value;

  if (!name || !email || !password) {
    document.getElementById("msg").innerText = "Required fields missing";
    return;
  }

  if (localStorage.getItem("user")) {
    document.getElementById("msg").innerText = "User already exists";
    return;
  }

  let user = { name, age, phone, email, address, pincode, password };
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("loginPrefill", email);

  window.location.href = "login.html";
}
