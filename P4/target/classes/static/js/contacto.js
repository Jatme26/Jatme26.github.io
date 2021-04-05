     document.getElementById("contact-form").addEventListener("submit", function(event){
    var username = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;
    var contacto = {"username" : username, "email" : email,"asunto" : asunto, "mensaje" : mensaje};

    fetch('http://localhost:8080/api/contact', {
        method: 'POST',
        headers : {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
        },
        body : JSON.stringify(contacto)
    })
    .then(res => {
        if(res.ok){
          return res;
        }else{
          console.log("Error en la validación del contacto")
          alert("Error en la validación del contacto")
        }
    })
    .then(r => {
        window.location.href="http://localhost:8080/html/index.html";
      })
    .catch(error => {
        console.error(error)

    })
    });