var REG = {
    property: 10,

    initialize: function() {
   
    },

    initializeEvents: function() {
    },

loadUsers: function() {
    REG.deleteTableRows();
      //leer de localStorage los usuarios
      var users = [];
      if (localStorage.getItem('users')) {
          users = JSON.parse(localStorage.getItem('users'));
          localStorage.clear();
      }
      //agregar cada usuario al DOM
      users.forEach(function(user, index, users) {
        REG.addUser(user);
      });

    },
     addUser: function(user) {
         //Carga los Ususarios
        
        // crear una HTML fila
        var row = "<tr><td>"+user.name+"</td><td>"+user.lastname+"</td><td>"+user.phone+"</td></tr>";

        // agregar a la tabla
        var table = document.getElementById("users_table");
        table.innerHTML = table.innerHTML + row;

        // agregarlo a localStorage
        var users = [];
        if (localStorage.getItem('users')) {
            users = JSON.parse(localStorage.getItem('users'));
        }
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        REG.clearFields();
      
    },
    deleteUsers: function() {
      //leer de localStorage los usuarios
      var users = [];
      if (localStorage.getItem('users')) {
          users = JSON.parse(localStorage.getItem('users'));
      }
   // users.pop();
    users.pop();
      localStorage.clear();
      REG.deleteTableRows();
       users.forEach(function(user, index, users) {
        REG.addUser(user);
       });

    },
    clearFields: function() {
      document.getElementById('lastname').value = '';
      document.getElementById('phone').value = '';
       document.getElementById('name').value = '';;
      document.getElementById('name').focus();
    },
    deleteTableRows: function(){
        //Eliminar rows de la tabla.
        var tableHeaderRowCount = 0;
var table = document.getElementById('users_table');
var rowCount = table.rows.length;

for (var i = tableHeaderRowCount; i < rowCount; i++) {
    table.deleteRow(tableHeaderRowCount);

}
    }
};

