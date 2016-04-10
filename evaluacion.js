/*********************************************
Registro de la informacion de los estudiantes
****************************************/

var estudiante=[
{nombre:"Angela",genero:"Femenino", edad:25, Notas:[10,5,9], ciudad:"Ancón", lenguajefav:"HTML", trabaja:true},
{nombre:"Ines",genero:"Femenino", edad:30, Notas:[8,11,5], ciudad:"Santa Elena", lenguajefav:"java", trabaja:true},
{nombre:"ana",genero:"Femenino",	edad:27, Notas:[12,12,12], ciudad:"Santa Elena", lenguajefav:"C++", trabaja:false},
{nombre:"Maribel",genero:"Femenino", edad:20, Notas:[13,13,13], ciudad:"Salinas", lenguajefav:"PHP", trabaja:true},
{nombre:"Domenica",genero:"Femenino",	edad:19, Notas:[14,14,14], ciudad:"Ancon",	lenguajefav:"javascript", trabaja:false}
];


/****************************************************
Imprimir por pantalla de lista seleccionada
*****************************************************/

function printList(list, ubica){ 
	var listHTML = '';
	if (ubica < 0) 
	{ 
		for(var i=0; i<list.length; i++)
		{
			listHTML += creaList(list, i);
		}
	}
	else
	{
		listHTML += creaList(list, ubica);
	}
	printHTML(listHTML, "info-estudiantes");
}


/******************************************
Funcion que crea las listas
********************************************/

function creaList(list, ubica){
	var listHTML = '';
	
		listHTML += '<ul>';
		listHTML += '<li>Nombre: ' + list[ubica].nombre + '</li>';
		listHTML += '<li>Genero: ' + list[ubica].genero + '</li>';
		listHTML += '<li>Edad: ' + list[ubica].edad + '</li>';
		listHTML += '<li>Notas: ' + list[ubica].Notas[0] + ' - ' + list[ubica].Notas[1] + ' - ' + list[ubica].Notas[2] + '</li>';
		listHTML += '<li>Ciudad: ' + list[ubica].ciudad + '</li>';
		listHTML += '<li>Lenguaje Favorito: ' + list[ubica].lenguajefav + '</li>';
		if(list[ubica].trabaja)
		{
			listHTML += '<li>Trabaja: si labora </li>';
		}else{
			listHTML += '<li>Trabaja: no labora </li>';
		}
	listHTML += '</ul> <br>' ;
	return listHTML; 
}

/******************************************
Funcion para imprimir
********************************************/
function printHTML(mensaje, infoEstudiante)
{
	var infoDiv = document.getElementById('infoEstudiante');
	infoDiv.innerHTML = mensaje;
}


/*****************************
funcion de buscar estudiante
*****************************/
function buscarPersona(list, nombre){
	var existe = '-1';
	for(var i=0; i<list.length; i++){
		if(list[i].nombre.toLowerCase() == nombre){
			existe = i;
		}
	}return existe;
}

/*********************************************
Escoger opciones q=salir l=listar o buscar
*********************************************/
while(true){
	var estudianteabuscar = prompt("Ingrese una opción: Q=salir o L=listar o ingrese un nombre a buscar");	
	if(estudianteabuscar != '' && estudianteabuscar !=null)
		{
		if(estudianteabuscar.toLowerCase() =='q'){ 
			alert("Programa terminado");
			printHTML('', "info-estudiantes");
			break;
		}
		else if(estudianteabuscar.toLowerCase() =='l')
		{
			printList(estudiante, -1); 
			break;
		}else{
				var ubica = buscarPersona(estudiante, estudianteabuscar.toLowerCase());
			if(ubica >=0){
				printList(estudiante, ubica); 
				}else{
					alert('El estudiante no esta registrado');
				}
			}
		}
	}


