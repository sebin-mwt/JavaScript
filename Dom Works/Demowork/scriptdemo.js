function toggleHOne(){

    let hOneHeading=document.getElementsByTagName("h1")
    Array.from(hOneHeading).map((t)=>t.style.color="green")

}

function toggleHtwo(){
    let htwotags=document.getElementsByTagName("h2")
    Array.from(htwotags).map(t=>t.style.color="blue")
}