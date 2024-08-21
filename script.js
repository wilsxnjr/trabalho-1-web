const botao = document.querySelector("button");

function enviar(event) {
    
    event.preventDefault();

    const nome = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    
    let username = document.getElementById("username");
    let useremail = document.getElementById("useremail");

    if(nome === "" || email ==="") {
        username = "username";
        useremail = "email";
    }

    username.innerHTML = nome;
    useremail.innerHTML = email;

}

botao.addEventListener("click", enviar);