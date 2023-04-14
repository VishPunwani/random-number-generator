const button = document.querySelector("#btn");
var getNumber = Math.random() * 1000;
const reset  = document.querySelector("#reset");
let output = document.querySelector('#output');




button.addEventListener("click", (generate)=>{
    output.innerHTML = Math.random() * 10000000000
})


button.addEventListener('click', () => {
    //button.style.display = 'none'; THIS LINE WILL HIDE THE GENERATE BUTTON 
    const box = document.getElementById('#box');
    //box.style.display = 'block';
  });
  

  reset.addEventListener('click', () => {
    button.style.display = '';
    const box = document.getElementById('#box');
   // box.style.display = 'block';
  });
  
  reset.addEventListener('click', () => {
    output.innerHTML = '';
  })
  









