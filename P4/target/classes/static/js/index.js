var plantilla = document.getElementById("plantilla");
	var data = [];

	 plantilla.addEventListener("click", function(event){
	  	//plantilla.innerHTML = "CLICKED!";
	    fetch('http://localhost:8080/api/home/contenido', {
	      headers: {
	      	'Content-Type': 'application/json',
	        'Accept': 'application/json',
	      },
	      method: 'GET'
	    })
	    .then(response => response.json()) //Suscribimos a la promesa response
			.then(r => { //Suscribimos a la promesa body
				data = r;
				ampliarPlantilla();

			})
	    .catch(e => { //Errores
	      console.error("Error " + e)
	    })
	    return false;
	  })


	  function ampliarPlantilla(){
	    let html = '';
	    data.forEach(function(jugador, i){
	    	palabras=jugador.title.split(" ");

	       html += '<tr>'
	                    +'<td id=i>'+palabras[0]+'</td>'
	                    +'<td>'+palabras[1]+'</td>'
	                    +'<td>'+palabras[2]+'</td>'
	                    +'<td>'+jugador.id+'</td>' //COn los ${} da error
	               '</tr>';
	    })
	    document.getElementById("ampliando").innerHTML = html;
	  }

	  if(sessionStorage.getItem("user")!=null)
	  {
	    let user = sessionStorage.getItem("user").split('\"')
	    let nombre = user[3]
	    document.getElementById("user-logo").innerHTML= '<p>Hola '+ nombre + '</p>'
	  }