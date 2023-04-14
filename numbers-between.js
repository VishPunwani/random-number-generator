
const button = document.querySelector("#btn");
let output = document.querySelector('#output');
const reset  = document.querySelector("#reset");
const equation = Math.floor(Math.random()* 100)



function getValue(){
  var x = document.getElementById('#min')
  //var y = document.getElementById('#max')
  document.getElementById("#output").innerHTML = x;

}


button.addEventListener("click", (getValue)=>{
output.innerHTML = getValue;
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
  









