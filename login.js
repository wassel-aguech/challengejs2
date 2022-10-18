
// info from user

let mailuser = document.querySelector(".mail");
let mpassuser = document.querySelector(".mpass")

//info from localstorage

  var users = JSON.parse(localStorage.getItem("users")) || []
 

//
  if (mailuser.value == "") {
  mailuser.classList.add("is-invalid");
  mailuser.classList.remove("is-valid")
  formvalid=false;
} else {
  mailuser.classList.add("is-valid");
  mailuser.classList.remove("is-invalid");

}

if (mpassuser.value == "") {
  mpassuser.classList.add("is-invalid");
  mpassuser.classList.remove("is-valid");
  formvalid=false;

} else {
  mpassuser.classList.add("is-valid");
  mpassuser.classList.remove("is-invalid");

}







//test info

function login(){
    var found = users.find((user)=> user.email === mailuser.value && user.pass === mpassuser.value 
    )
    if (found) {
        window.location.href = 'dashbord.html'
    } else {
        alert('verify your email or password')
    }
}
  document.getElementById('btn').addEventListener('click',login)  
