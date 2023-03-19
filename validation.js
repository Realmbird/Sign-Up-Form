const password = document.getElementById('password');
const confirm = document.getElementById('confirm_password');
password.addEventListener("input", (event) =>{
  if(password.value == confirm.value){
    password.setCustomValidity("")
  }else {
    password.setCustomValidity("Not Equal")
  }
})
confirm.addEventListener("input", (event) => {
  if(password.value == confirm.value){
    password.setCustomValidity("")
  }else {
    password.setCustomValidity("Not Equal")
  }
})