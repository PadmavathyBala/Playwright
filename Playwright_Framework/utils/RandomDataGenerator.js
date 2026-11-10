class RandomDataGenerator{

randomString(length){
    let charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let result = '';
    for (let i = 0; i < length; i++) {
        result += charset.charAt(Math.floor(Math.random() * 52));
    }
    return result;
}


randomNumber(length){
    let result = '';
    for (let i = 0; i < length; i++) {
        result += Math.floor(Math.random() * 10);
    }
    return result;
}

randomAlphaNumeric(length){
    let charset = 'abcdefghijklmnopqrstuvwxyz'
    let result = '';
    for (let i = 0; i < length; i++) {
        result +=charset.charAt(Math.floor(Math.random() * 26));
        result += Math.floor(Math.random() * 10);
    }
    return result;
}
}
