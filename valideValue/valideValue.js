const validate=(number)=>{
    if(number < 0 || number > 100){
        return false
    }
    return true
}

module.exports = validate
