document.getElementById("login-form").addEventListener("submit", function(event){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var user = {"username" : username, "password" : password};
    fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers : {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
        },
        body : JSON.stringify(user)
    })
    .then(res => {
        if(res.ok){
            return res.json()
        }else{
            console.log("Error en la validación del login")
            alert("Error en la validación del login")
        }
    })
    .then(data => {
        if(data.username!=null){
            sessionStorage.setItem("user",JSON.stringify(user));
            console.log(JSON.stringify(user))
            window.location.href="http://localhost:8080/html/index.html"
        }else{
            console.log("Usuario no encontrado")
            alert("Usuario no encontrado")
        }
    })
    .catch(error => {
        console.error(error)

    })
  })