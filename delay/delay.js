const delay =(callback,ms)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(callback())
        },ms)   
    })
}

delay(()=> 20+20,1000)
    .then(res=> console.log(res))

module.exports = delay