const multipleOfTen = num => {
    if(num % 10 == 0) {
        return num + ' is multiple of 10'
    }else {
        return num;
    }
}

module.exports= {multipleOfTen};