 REG.initializeEvents = function() {
      if(document.getElementById('addUserButton')) {
        document.getElementById('addUserButton').addEventListener('click', function() {
          // obtener la información del form
          var user = {
            lastname: document.getElementById('lastname').value,
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
          };
          REG.loadUsers();
          REG.addUser(user);
           
        });
      }  if(document.getElementById('deleteUserButton')) {
        document.getElementById('deleteUserButton').addEventListener('click', function() {
      
      REG.deleteUsers();  
      });
};
}
 REG.initializeEvents();