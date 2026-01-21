window.onload = function () {
  let prefill = localStorage.getItem("loginPrefill");
  if (prefill) document.getElementById("loginId").value = prefill;
};

function login() {
  let id = document.getElementById("loginId").value;
  let pass = document.getElementById("loginPass").value;

  let user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    document.getElementById("msg").innerText = "No user found";
    return;
  }

  if ((id === user.email || id === user.phone) && pass === user.password) {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "user.html";
  } else {
    document.getElementById("msg").innerText = "Invalid credentials";
  }
}
