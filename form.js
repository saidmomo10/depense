
function valider(e){
    event.preventDefault();

    let username = document.getElementById("username").value;
    // let prenom = document.getElementById("prenom").value;
    // let adresse = document.getElementById("adresse").value;
    let email = document.getElementById("email").value;
    // let date = document.getElementById("date").value;
    let pass1 = document.getElementById("password1").value;
    let pass2 = document.getElementById("password2").value;
    // let pass2 = document.getElementById("password2").value;

    if((username!== "") && (email !== "") && (pass1 !== "") && (pass2 != "")){
        if(pass1===pass2){
            var user = { 'username': username, 'email':email, 'password1':pass1, 'password2': password2};

            // localStorage.setItem('user',JSON.stringify(user))
            
            // user = JSON.stringify(user);
            var json = JSON.stringify(user);
            localStorage.setItem('user', json);
            console.log('ajouté');
            window.location.href = "connection.html";
        } else{
            document.querySelector(".confirmation").innerHTML='Les mots de passe entrés ne sont pas conformes'
        }
        
        
    }
     else{
        document.querySelector(".message").innerHTML='Veuillez remplir tous les champs';
       
    }
    document.getElementById("username").value = "";
    // document.getElementById("prenom").value = "";
    document.getElementById("email").value = "";
    // document.getElementById("date").value = "";
    document.getElementById("password1").value = "";
    document.getElementById("password2").value = "";
}

function loginFunc(e){
    event.preventDefault();

    let username = document.getElementById("username").value;
    let pass1 = document.getElementById("password1").value;
    let alert = document.querySelector(".alert");
    

    var user = localStorage.getItem('user');
    var data = JSON.parse(user);
    console.log(data);

    if(user == null){
        alert.innerHTML="Nom d'utilisateur ou mot de passe invalide";
    } else if(username == data.username && pass1 == data.password1){
        window.location.href = "index.html";
        
    } else{
        alert.innerHTML='Mot de passe invalide';
    }

    document.getElementById("username").value = "";
    document.getElementById("password1").value = "";

    // let user = JSON.parse(localStorage.getItem('user'));
    // var isLoggedIn = false;
    // for (var i=0; i<user.length; i++){
    //     if (user[i].nom == name && user[i].preno == preno){
    //         isLoggedIn = true;
    //         break;
    //     }
    // }

    // if (isLoggedIn){
    //     window.location.href = "Redirection.html";
    //     // window.open("Redirection.html");
    //     return true;
    // }

    // else{
    //     alert("please");
    // return false;
    // }

    // if(window.location.pathname==='connection.html'){
    //     const user = JSON.parse(localStorage.getItem('user'));

    // }
    // else{
    //     // document.querySelector(".message").innerHTML='veuillez';
    //         return false;
    // }

    // if (name === ){
    //     // window.location.href= "Redirection.html"
        
    //     window.open("Redirection.html") ;
    //     return true
    // } else{
    //     document.querySelector(".message").innerHTML='veuillez';
    //     return false;
    // }

    // window.open("Redirection.html")
}


// let toto = JSON.parse(localStorage.getItem('username.value'));
// console.log("toto", toto);

// let username = document.getElementById("username");
// var user = localStorage.getItem('username.value');
// var toto = JSON.parse(user);
// console.log(toto);

// let messa = document.getElementById("identité");
// messa.innerHTML = toto.username;





// window.onload = function(){
//       event.preventDefault();
//       let username = document.getElementById("username");
      
//       let messa = document.getElementById("identité");
//       var user = localStorage.getItem('username');
//       var data = JSON.parse(user);
//       console.log(data);
      
      
//       messa.innerHTML = ;
//       // alert(data.username);
      
      
  
//   }



    
    
    
    // alert(data.username);
    
    




// function disconnectUserFromChat() {
//     return new Promise(function(resolve, reject) {
//       try {
//         localStorage.setItem('disconnected', true);
//         resolve();
//       } catch(error) {
//         reject(error);
//       }
//     });
// }
  
//   disconnectUserFromChat()
//     .then(function() {
//       socket.on('disconnect', function() {
//         console.log('Disconnected');
//       });
//     })
//     .catch(function(error) {
//       console.log(error);
//     });

// const tot = localStorage.getItem("user5");
// dat = JSON.parse(tot);
// console.log(dat)