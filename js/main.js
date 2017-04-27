
var primeros10 = [];
var list = document.getElementById("lista");
for (i=0 ; i<10 ; i++){
	primeros10.push(arregloTareas[i]);
	list.innerHTML += "<li>" + primeros10[i].title + "</li>";
}

//lista10 = primeros10.forEach(function(element){"<ul>" + "<li>" + element.title + "</li>" + "</ul>";})


function agregarTarea(){
	var newWork = document.getElementById("tareaNueva");

	function Tarea(userId,id,title,completed){
		this.userId = userId;
		this.id = id;
		this.title = title;
		this.completed = completed;
	}

	var tareaExtra = new Tarea(1,primeros10.length+1,newWork.value,false); //porque se supone que son tareas pendientes
	primeros10.push(tareaExtra);

	var list = document.getElementById("lista");
	list.innerHTML += "<li>" + primeros10[primeros10.length-1].title + "</li>";
	newWork.value = "";
}