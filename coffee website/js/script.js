let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

//let cartItem = document.querySelector(".cart-items-container");

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    //cartItem.classList.remove('active');
}

document.getElementById("button").addEventListener("click",(e)=>{
    e.preventDefault()
const name = document.getElementById("name")
const email = document.getElementById("email")
const number = document.getElementById("number")

if(validate(name.value, email.value, number.value)){
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'the email have been sent ',
        showConfirmButton: false,
        timer: 1500
      })
      name.value=""
      email.value=""
      number.value=""
}else{
    Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'empty fields',
        showConfirmButton: false,
        timer: 1500
      })
      
}
})


function validate (name, email, number) {
    if(name==="" ||email==="" ||number==="") return false
    return true

}

