const button = document.querySelector("#btn");
const getNumber = Math.random();

button.addEventListener("click", myFunction);


button.addEventListener('click', () => {
    
    button.style.display = 'none';
  
    
    const box = document.getElementById('#box');
    box.style.display = 'block';
  });
  
function myFunction(){
    alert(getNumber)
}





