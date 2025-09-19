
function handleAddition(){

    let num1=document.querySelector("#number1").value ;
    let num2=document.querySelector("#number2").value ;

    output=Number(num1)+Number(num2);

    result.style.display='block'

    // let resultValue=document.querySelector("#resultValue")
    resultValue.textContent=output
    
}


function handleSubtraction(){

    let num1=document.querySelector("#number1").value ;
    let num2=document.querySelector("#number2").value ;

    output=Number(num1)-Number(num2);

    result.style.display='block'
    
    // let resultValue=document.querySelector("#resultValue")
    resultValue.textContent=output
    
}