var count=0;

function incrementValue(){

    count++;
    let display=document.querySelector("#counterDisplay");
    // display.innerHTML=count;
    checkNum(count,display)
    display.textContent=count;
    

}

function resetValue(){
    count=0;
    let display=document.querySelector("#counterDisplay");
    checkNum(count,display)
    display.textContent=count
}

function decrementValue(){

    count--;
    let display=document.querySelector("#counterDisplay")
    checkNum(count,display)
    display.textContent=count
}

function checkNum(num,display){

    if (num > 0){
        display.style.color="green";
    }

    else if (num < 0){
         display.style.color="red";
    }

    else {
        display.style.color="black";
    }
}