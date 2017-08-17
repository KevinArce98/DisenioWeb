function addEvents() {
	var button = document.getElementById("login");
	button.addEventListener("click", verification);
	var btnCancel = document.getElementById("cancel");
	btnCancel.addEventListener("click", cancelLogin);
}
addEvents();

function cancelLogin(){
	location.href = "index.html";
}

function verification() {
	var userName = document.getElementById("user").value;
	var pass = document.getElementById("pass").value;

	if (userName == "" || pass == "") {
		alert("Ingrese los datos.");
	} else {
		var users = JSON.parse(localStorage.getItem('users'));
		var element;

		for (var i = 0; i < users.length; i++) {
			element = users[i];
			if (userName == element.userName) {
				if (pass == element.pass) {
					localStorage.setItem("userActive", userName);
					location.href = "Principal.html";
					break;
				} else {
					alert("Contraseña incorrecta.")
					break;
				}
			} else if (i == users.length - 1) {
				clearFileds();
				alert("Usuario " + userName + " no registrado.")
			}
		}
	}
}

function clearFileds() {
	document.getElementById("user").value = "";
	document.getElementById("pass").value = "";
}