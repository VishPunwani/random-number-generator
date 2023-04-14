
const button = document.querySelector("#btn");
let min = parseInt(document.getElementById('#min')). valueOf;
let max = parseInt(document.getElementById('#max')). valueOf;
let output = document.querySelector('#output');
const reset  = document.querySelector("#reset");
const equation = Math.floor(Math.random()*(max-min+1))+min;





button.addEventListener("click", ()=>{

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
  









