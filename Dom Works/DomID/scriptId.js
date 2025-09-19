function selectById(){
    let subHeading=document.getElementById("sub-head")
    subHeading.style.color="Blue"
}

function selectByClass(){

    let classItems=document.getElementsByClassName("col-yelow")
    Array.from(classItems).map(t=>t.style.color="red")
}