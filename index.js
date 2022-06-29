let usuario = prompt ('Hola! Ingresa tu nombre')
alert ("Bienvenido" + " " + usuario)

let respuesta = prompt (usuario + "Tu edad?")

while (respuesta <-21) { 
    answer = prompt ("Es correcto?")
	
    if (answer == "si") { 
	    alert ("No podes ingresar") 
	  } else { 
    	respuesta = prompt ("Ingresa tu edad")
    } 
}
alert ("Bienvenido" + " " + usuario) 