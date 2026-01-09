function generateNumber() {

    const min = Math.ceil(document.querySelector(".numero1").value)
    const max = Math.floor(document.querySelector(".numero2").value)
    
    if ( min >= max ) {
       alert("o valor minimo tem que ser MENOR que o valor máximo") 
    } else {
        const result = Math.floor(Math.random() * (max - min + 1) + min);

    alert(result)
    }
    
}


  
