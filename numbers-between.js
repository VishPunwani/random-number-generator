
const button = document.querySelector("#btn");
let output = document.querySelector('#output');
const reset  = document.querySelector("#reset");
const equation =  (min, max) => Math.floor(Math.random() * (max - min)) + min;
let min = document.querySelector('#min').value;
let max = document.querySelector('#max').value;




button.addEventListener("click", function(){
  let min = document.querySelector('#min').value;
  let max = document.querySelector('#max').value;

  output.innerHTML =  (min, max) => Math.floor(Math.random() * (max - min)) + min;;
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
    output.innerHTML = 'Output';
  })
  









