
const button = document.querySelector("#btn");
let min = document.querySelector("#min").value;
let max = document.querySelector("#max").value;
let output = document.querySelector('#output');
const reset  = document.querySelector("#reset");




function randomNumber(min, max){
   
     return Math.floor(min + Math.random() * (max - min + 1)) ;
}


button.addEventListener("click", (randomNumber)=>{
    output.innerHTML = document.write(randomNumber);
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
  









