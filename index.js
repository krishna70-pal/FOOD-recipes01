let btn = document.getElementById("btn");
let resig = document.getElementById("resig");
let login = document.getElementById("login");
let signUp = document.getElementById("SignUp"); 
let bar = document.getElementById("bar");
let link = document.getElementById("link");


btn.addEventListener("click", () => {
  login.style.display = "block";
});

btn.addEventListener("dblclick", () => {
  login.style.display = "none";
});

resig.addEventListener("click", () => {
  SignUp.style.display = "block";
});

resig.addEventListener("dblclick", () => {
  SignUp.style.display = "none";
}); 

bar.addEventListener("click",()=>{
    link.style.display="block";
    
});
bar.addEventListener("dlbclick",()=>{
    link.style.display="none";
});