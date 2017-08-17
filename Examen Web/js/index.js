function addEvents(){
	var btnLogin = document.getElementById("login");
	btnLogin.addEventListener("click", function(){
		location.href= "Login.html";
	});

	var btnRegister = document.getElementById("registro");
	btnRegister.addEventListener("click", function(){
		location.href= "Registro.html";
	});
}
addEvents();