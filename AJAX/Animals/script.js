let input=document.getElementById("search");
let btn=document.getElementById("buton");

// let aname=document.getElementById("aname");
let tableFull=document.querySelector(".animal-desc");
let table=document.querySelector(".table");

const apiUrl="https://api.api-ninjas.com/v1/animals?"

btn.addEventListener("click", async function(){

    let animal=input.value;
    let url=apiUrl+`name=${animal}` ;
    let data;

    htmlData=` <table class="table  table-bordered  text-center ">
                   <thead>
                        <tr class="table-dark">
                            <th>Name</th>
                            <th>Kingdom</th>
                            <th>Class</th>
                            <th>Location</th>
                            <th>LifeSpan</th>
                        </tr>
                   </thead>

                  <tbody>`  
    try{

    let res=await fetch(url,{ method:"GET",headers:{"X-Api-Key":"S3DOKgY1T/l7J9vDPQfLvA==aT2LbVbklkfVPVHp"} } );
    
    if (!res.ok){
        alert("Error occured");
        return;
    }

    data= await res.json();

    }   

    catch(err){
        alert("Error occured " + err)
    }

    
    console.log(data);
    
    let leng=data.length;

    if (leng>5){
        leng=5;
    } 

    for (let i = 0; i < leng; i++) {

    let loc=data[i].locations;
    htmlData+= `<tr>
                            <td>${data[i].name }</td>
                            <td>${data[i].taxonomy?.kingdom || "Not available"}</td>
                            <td>${data[i].taxonomy?.class || "Not available"}</td>
                            <td>${loc ? loc :"Not Available"}</td>
                            <td>${data[i].characteristics.lifespan ?data[i].characteristics.lifespan:"Not available" }</td>
                        </tr>`
    }

    htmlData+=`</tbody>
            </table>`
   tableFull.style.display="block"
   table.innerHTML=htmlData;
    
})