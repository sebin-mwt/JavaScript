let promise =new Promise((resolve,reject)=>{
    let status=false;
    try{

        if(status==true){
            setTimeout(() => {
            console.log("Hai after 2 seconds..");
            }, 2000);
        }
        else {
        reject("Status is false");
        }
    }    

    catch(err){
        reject(err);
        
    }
    console.log("Hai");
    
});

promise.then(res=> console.log(res)).catch(err=> console.log(err))