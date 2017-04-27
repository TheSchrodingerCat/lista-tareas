
var primeros10 = []; // en este array se almacenan las 10 primeras tareas del JSON y las que agregue el usuario
var list = document.getElementById("lista");
for (i=0 ; i<10 ; i++){
	primeros10.push(arregloTareas[i]);
	list.innerHTML += "<li id='" + (i+1).toString() + "'>" +  primeros10[i].title + "</li>";
} // se enlistan los 10 primeros y se enlazan con el id del div de HTML

//lista10 = primeros10.forEach(function(element){"<ul>" + "<li>" + element.title + "</li>" + "</ul>";})


function agregarTarea(){

	var newWork = document.getElementById("tareaNueva");

	// se crea el constructor Tarea, al cual se le asignara los mismos atributos del objeto JSON
	function Tarea(userId,id,title,completed){
		this.userId = userId;
		this.id = id;
		this.title = title;
		this.completed = completed;
	}

	// se crea el obteto tareaExtra, para agregarlo al arreglo primeros10
	var tareaExtra = new Tarea(1,primeros10.length+1,newWork.value,false); //porque se supone que son tareas pendientes
	primeros10.push(tareaExtra); //agrega el objeto 

	// se rescata la propiedad title del nuevo objeto y se agrega a la lista
	var list = document.getElementById("lista");
	list.innerHTML += "<li id='" + primeros10.length.toString() + "'>" + primeros10[primeros10.length-1].title + "</li>";
	newWork.value = "";
}

function editarTarea(id){
	var nuevoIngreso = prompt("Edite su tarea: ");
	var idIngresado = document.getElementById("editar");
	var edit = document.getElementById("tareaNueva");
	if (idIngresado==primeros10.id){
		edit.innerHTML = nuevoIngreso; // no sé como enlazar esta edición con el id de la tarea correspondiente
	}
}


