/*Funcion de Capturar, Almacenar datos y Limpiar campos*/
$(document).ready(function(){    
    $('#boton-guardar').click(function(){        
        /*Captura de datos escrito en los inputs*/        
        var nom = document.getElementById("nombretxt").value;
        var apel = document.getElementById("apellidotxt").value;
        var pho = document.getElementById("phonetxt").value;
        var ema = document.getElementById("emailtxt").value;
        /*Guardando los datos en el LocalStorage*/
        localStorage.setItem("Nombre", nom);
        localStorage.setItem("Apellido", apel);
        localStorage.setItem("Telefono", pho);
        localStorage.setItem("Email", ema);
        /*Limpiando los campos o inputs*/
        document.getElementById("nombretxt").value = "";
        document.getElementById("apellidotxt").value = "";
        document.getElementById("phonetxt").value = "";
        document.getElementById("emailtxt").value = "";
    });   
});

/*Funcion Cargar y Mostrar datos*/
$(document).ready(function(){    
    $('#boton-cargar').click(function(){                       
        /*Obtener datos almacenados*/
        var nombre = localStorage.getItem("Nombre");
        var apellido = localStorage.getItem("Apellido");
        var telefono = localStorage.getItem("Telefono");
        var correo = localStorage.getItem("Email");
        /*Mostrar datos almacenados*/      
        document.getElementById("mostrar").innerHTML = nombre + " " +apellido + "\n" + telefono + "\n" + correo;
        
    });   
});