function delayedMessage(){

    return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Promise resolved!")
        },2000)

    })
    
}

async function getMessage(){
      const msg = await delayedMessage();
  console.log(msg);

}

getMessage()