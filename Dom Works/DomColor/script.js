function changeColor(color){
    let cicle=document.getElementsByClassName("circle")
    Array.from(cicle).map(t=>t.style.backgroundColor=color);
}   