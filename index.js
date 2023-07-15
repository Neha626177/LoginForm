

const signinBtn = document.querySelector('.sign-in');
const signupBtn = document.querySelector('.sign-up');
const head = document.querySelector('.head');
const namefield = document.querySelector('#name-field')



signinBtn.addEventListener('click',()=>{
    namefield.style.maxHeight = "0";
    head.innerHTML = "Sign in";
    signupBtn.classList.add('disable');
    signinBtn.classList.remove('disable');
})
signupBtn.addEventListener("click", () => {
   namefield.style.maxHeight = "60px";
  head.innerHTML = "Sign up";
  signupBtn.classList.remove("disable");
  signinBtn.classList.add('disable');
   
});