const button = document.querySelector("#btn");
const getNumber = Math.random();
const reset  = document.querySelector("#reset");


// testing code commented out
//button.addEventListener("click", myFunction);

//function myFunction(){
  //  alert(getNumber)
//}




button.addEventListener('click', () => {
    button.style.display = 'none';
    const box = document.getElementById('#box');
    box.style.display = 'block';
  });
  

  reset.addEventListener('click', () => {
    button.style.display = '';
    const box = document.getElementById('#box');
    box.style.display = 'block';
  });
  
  









