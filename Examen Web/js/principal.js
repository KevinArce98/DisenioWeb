function addEvents(){
	var btnSend = document.getElementById("sendPost");
	btnSend.addEventListener("click", savePost);

	var rows = document.getElementsByTagName("tr");
	for (var i = 0; i < rows.length; i++) {
		rows[i].addEventListener("click", function(event) {
			selectRow(this);
		}, true);
	}
	var btnEdit = document.getElementById("edit");
	btnEdit.addEventListener("click", editPost);

	var btnRemove = document.getElementById("delete");
	btnRemove.addEventListener("click", removePost);

	var btnClose = document.getElementById("close");
	btnClose.addEventListener("click", closeSession);
}
addEvents();

function selectRow(row) {
	var user = localStorage.getItem("userActive");
	if (row.attributes[0].value == user) {
		if (document.getElementsByClassName("trselected").length > 0) {
		var element = document.getElementsByClassName("trselected");
		element[0].removeAttribute("class");
		}
		row.className = "trselected";
	}else {
		alert("No tienes permiso para modificar este post");
		loadTable();
	}
}

function closeSession(){
	localStorage.removeItem("userActive");
	location.href = "Index.html";
}
function savePost(){
	var post =  document.getElementById("post").value;
	var posts = [];
	if (post != "") {
		post = createPost(post);
		if (localStorage.getItem('posts')) {
			posts = JSON.parse(localStorage.getItem('posts'));
			posts.push(post);
			localStorage.setItem('posts', JSON.stringify(posts));
		}else {
			posts.push(post);
			localStorage.setItem('posts', JSON.stringify(posts));
			
		}
	}else {
		alert("Escriba un post antes de enviar");
	}
	document.getElementById("post").value = "";
	loadTable();
}

function createPost(postText){
	var user = localStorage.getItem("userActive");
	var post = {
		text : postText,
		user : user,
	};
	return post;
}

function loadTable(){
	var post;
	var userActive = document.getElementById("user");
	userActive.innerText =  localStorage.getItem("userActive");
	document.getElementById("post").focus();
	var posts = JSON.parse(localStorage.getItem("posts"));
	var table = document.getElementById("postsAdded");
	table.innerHTML = null;
	if (localStorage.getItem("posts")) {
		for (var i = 0; i < posts.length; i++) {
			post = posts[i];
			var row = "<tr name=\"" + post.user + "\"><td>"+ post.text+ "</td></tr>";
			table.innerHTML = table.innerHTML + row;
		}
	}
	addEvents();
}
loadTable();

function editPost(){
	if (document.getElementsByClassName("trselected").length != 0) {
			var rowSelected = document.querySelectorAll("tr.trselected")[0].innerText;
			document.getElementById("post").value = rowSelected;

			var btnSend = document.getElementById("sendPost");
			btnSend.removeEventListener("click", savePost);
			btnSend.value = "Guardar";
			document.getElementById("title").innerText = "Editando tu post.";
			btnSend.addEventListener("click", saveEditing);

			if (document.getElementById("cancelEdit") == null) {
				var btnCancel = document.createElement("button");
				btnCancel.id = "cancelEdit";
				var text = document.createTextNode("Cancelar");
				btnCancel.appendChild(text);
				btnCancel.addEventListener("click", cancelEditing);
				btnCancel.className = "btn btn-danger";
				document.getElementById("buttons").appendChild(btnCancel);
			}
		} else {
			alert("Antes seleccione un post!!");
		}
}
function saveEditing(){
	var newPost = document.getElementById("post").value;
	if (newPost != "") {
		var oldPost = document.querySelectorAll("tr.trselected")[0].innerText;
		var posts = JSON.parse(localStorage.getItem('posts'));
		var aux;

		for (var i = 0; i < posts.length; i++) {
			aux = posts[i];
			if (aux.text == oldPost) {
				posts[i].text = newPost;
				break;
			}
		}
		localStorage.setItem('posts', JSON.stringify(posts));
		cancelEditing();
		alert("Post editado");
		document.getElementById("post").focus();
		loadTable();
	} else {
		alert("Ingrese el nuevo post");
	}
}

function cancelEditing() {
	document.getElementById("post").value = "";
	document.getElementById("sendPost").value = "Postear";
	loadTable();
	document.getElementById("title").innerText = "Escribe tu post aquí";
	addEvents();
	var parent = document.getElementById("buttons");
	var child = document.getElementById("cancelEdit");
	parent.removeChild(child);
}

function removePost(){
	if (document.getElementsByClassName("trselected").length != 0) {
		var message = confirm("¿Estás Seguro?");
		if (message) {
			var rowSelected = document.querySelectorAll("tr.trselected")[0].innerText;
			var posts = JSON.parse(localStorage.getItem('posts'));

			for (var i = 0; i < posts.length; i++) {
				if (posts[i].text == rowSelected) {
					if (posts.length != 1) {
						posts.splice(i, 1);
						localStorage.setItem('posts', JSON.stringify(posts));
						break;
					} else {
						localStorage.removeItem("posts");
						break;
					}
				}
			}

			alert("Post eliminado");
			loadTable();
			addEvents();
		}
	} else {
		alert("Antes seleccione un post!!");
	}
}

