let number=0;

const changeSection=x=>{
   const container=document.querySelectorAll('.container'); 
   container[0].classList.toggle('hidden_section');
   container[1].classList.toggle('hidden_section');

   const valoration=document.querySelector('.starts_number');
   valoration.textContent=x;
}

document.querySelector('.container_number').addEventListener('click',(e)=>{
    if(e.target.tagName=='SPAN'){
         number=e.target.textContent;
        for(let i=1;i<=5;i++){
           if(number==i){
            document.getElementById(i).classList.add('points');
           }
           else{
            document.getElementById(i).classList.remove('points');
           }
        }
    }
})

document.querySelector('.submit').addEventListener('click',(e)=>{
    if(number==0){
        alert('Su opinión nos es de gran ayuda,selecione un número de estrellas para calificar nuestro trabajo');
    }
    else{
        changeSection(number);
    
    }
})